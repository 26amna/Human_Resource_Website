from django.urls import path
from . import views

urlpatterns = [
    path('', views.Projects, name="Projects"),
    path('Main/', views.Main_Page, name="Main"),
    path('Register', views.Register, name="Register"),
    path('updateEmployee/<int:id>/', views.updateEmployee, name='updateEmployee'),
    path('add_employee/', views.add_employee, name="add_employee"),
    path('AllEmployees', views.AllEmployees, name="allEmployees"),
    path('AllVacations', views.AllVacations, name="allVacations"),
    path('SubmitVacation', views.SubmitVacation, name="submit"),
    path('submitVacation/', views.submit_vacation, name='submitVacation'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('deleteVacation/<int:id>', views.deleteVacation, name='deleteVacations'),
    path('ApproveVacation/<int:id>', views.ApproveVacation, name='ApproveVacations'),
    path('searchForEmployee/', views.search_employee, name='searchEmployee'),
    path('searchResult/', views.search_result, name='searchResult'),
    path('UpdateInfo/<int:id>', views.updateInfo, name='updateInfo'),

]
