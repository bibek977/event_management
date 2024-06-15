Event Management Calendar App

####### Instructions ############

Python is required for backend
Node is required for frontend

############ Backend part ##############

1. Clone this repo
    git clone git@github.com:bibek977/event_management.git

2. Open the project and  go inside backend folder
    cd backend

3. Create virtual environments
    python3 -m venv venv
    
    OR 

    python -m venv venv

4. Install the requirements
    pip install -r requirements.txt

5. Custom Auth is implemented So makemigrations for users
    python manage.py makemigrations users

6. Then migrate the database
    python manage.py migrate
    

############ Frontend part #############

7. If you inside the backend folder then exit 
    cd ..

8. Then enter into frontend folder
    cd frontend

9. Install the node modules
    npm install

############# To run the project ############

for backend
    cd backend
    python manage.py runserver

for frontend
    cd frontend
    npm run dev