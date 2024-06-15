from rest_framework import serializers
from time import timezone
from .utils import *
from datetime import datetime

class EventSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=250)
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    participants = serializers.IntegerField()
    created_by = serializers.CharField(max_length = 50)
    created = serializers.DateTimeField(read_only=True)
    modified= serializers.DateTimeField(read_only=True)

    def validate_participants(self,value):
        if value < 0:
            raise serializers.ValidationError("participants must be greater than 0")
        return value

    def create(self, validated_data):
        validated_data['created'] = datetime.now()
        validated_data['modified'] = datetime.now()
        self._save_to_file(validated_data)
        return validated_data

    def update(self, instance, validated_data):
        if isinstance(instance, dict):
            instance.update(validated_data)
            instance['modified'] = datetime.now()
        else:
            for attr, value in validated_data.items():
                setattr(instance, attr, value)
            instance.modified = datetime.now()
        self._save_to_file(instance, update=True)
        return instance
    
    def _save_to_file(self, data, update=False):
        file_path = 'results.json'

        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                try:
                    events = json.load(file)
                except json.JSONDecodeError:
                    events = []
        else:
            events = []

        if update:
            for i, event in enumerate(events):
                if event['id'] == data['id']:
                    events[i] = data
                    break
        else:
            event_id = len(events) + 1
            data['id'] = event_id
            events.append(data)
        
        with open(file_path, 'w') as file:
            json.dump(events, file, default=str, indent=4)
