import json
import os

FILE_PATH = 'results.json'

def load_events():
    if not os.path.exists(FILE_PATH):
        return []
    with open(FILE_PATH, 'r') as file:
        return json.load(file)

def save_events(events):
    with open(FILE_PATH, 'w') as file:
        json.dump(events, file, indent=4)

def create_event(event):
    events = load_events()
    event_id = len(events) + 1
    event['id'] = event_id
    events.append(event)
    save_events(events)
    return event

def read_event(event_id):
    events = load_events()
    for event in events:
        if event['id'] == event_id:
            return event
    return None

def update_event(event_id, updated_event):
    events = load_events()
    for index, event in enumerate(events):
        if event['id'] == event_id:
            events[index].update(updated_event)
            save_events(events)
            return events[index]
    return None

def delete_event(event_id):
    events = load_events()
    for index, event in enumerate(events):
        if event['id'] == event_id:
            deleted_event = events.pop(index)
            save_events(events)
            return deleted_event
    return None

def list_events():
    return load_events()