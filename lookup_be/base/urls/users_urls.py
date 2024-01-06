from django.urls import path
from base.views import users_views as views

urlpatterns = [    
    path('', views.getAllUsers, name='users-all'),
    path('register/', views.registerUser, name='user-register'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile'),
]
