from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager,PermissionsMixin

class CustomUserManager(BaseUserManager):
    def _create_user(self,email,phone,password,**extra_fields):
        if not email:
            raise ValueError("You have not provided valid email")
        if not phone:
            raise ValueError("You have not provided valid Phone Number")

        email = self.normalize_email(email)
        user = self.model(email=email,phone=phone,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_user(self,email,phone,password=None,**extra_fields):
        extra_fields.setdefault("is_active",True)
        extra_fields.setdefault("is_staff",False)
        extra_fields.setdefault("is_superuser",False)
        return self._create_user(email,phone,password,**extra_fields)

    def create_superuser(self,email,phone,password=None,**extra_fields):
        extra_fields.setdefault("is_active",True)
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)
        return self._create_user(email,phone,password,**extra_fields)
    
class CustomUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(verbose_name='email',unique='True')
    phone = models.CharField(max_length=20,unique='True')
    name = models.CharField(max_length=50,blank=True,default='')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    username = models.CharField(max_length=50,blank=True,default="")

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    # EMAIL_FIELD = "email"

    REQUIRED_FIELDS = ["phone"]

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def get_full_name(self):
        return self.name