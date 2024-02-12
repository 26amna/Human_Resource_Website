import datetime
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from . import models
from .models import user
from .models import vacations



def Projects(request):
    temp = loader.get_template('Home2.html')
    return HttpResponse(temp.render())


def Dummy(request):
    temp = loader.get_template('dummy.html')
    return HttpResponse(temp.render())


def Main_Page(request):
    temp = loader.get_template('welcome_page.html')
    return HttpResponse(temp.render())


def Register(request):
    temp = loader.get_template('add_employee.html')
    return HttpResponse(temp.render())


def updateEmployee(request, id):
    employee = get_object_or_404(user, id=id)
    template = loader.get_template('Update.html')
    context = {
        'x': employee,
    }
    return HttpResponse(template.render(context, request))



def SubmitVacation(request):
    temp = loader.get_template('submitVacation.html')
    return HttpResponse(temp.render())


def add_employee(request):
    if request.method == 'POST':
        name = request.POST.get('name') 
        employee_id = request.POST.get('id')
        e_mail = request.POST.get('email')
        phone_number = request.POST.get('phone')
        marital = request.POST.get('marital_status')
        gender = request.POST.get('gender')
        available_vacation = request.POST.get('available_vacation')
        actual_approved_vacations = request.POST.get('approved_vacation')
        salary = request.POST.get('salary')
        date_of_birth = request.POST.get('dob')

        user_instance = user(
            id=employee_id,
            name=name,
            phone_number=phone_number,
            e_mail=e_mail,
            gender=gender,
            marital=marital,
            salary=salary,
            available_vacation=available_vacation,
            actual_approved_vacations=actual_approved_vacations,
            date=date_of_birth
        )
        user_instance.save()

        return redirect('AllEmployees') 
    return render(request, 'All_Employees.html')


def AllEmployees(request):
  mymembers = user.objects.all().values()
  template = loader.get_template('All_employees.html')
  context = {
    'mymembers': mymembers,
  }
  return HttpResponse(template.render(context, request))

def AllVacations(request):
  Vacations = vacations.objects.all().values()
  template = loader.get_template('All_Vacations.html')
  context = {
    'Vacations': Vacations,
  }
  return HttpResponse(template.render(context, request))

def delete(request,id):
   user2 = user.objects.get(id=id)
   user2.delete()
   return HttpResponseRedirect(reverse(AllEmployees))

def deleteVacation(request,id):
   vacation =vacations.objects.get(id=id)
   vacation.status = 'Denied'
   vacation.save()
   return HttpResponseRedirect(reverse(AllVacations))


def ApproveVacation(request,id):
   vacation =vacations.objects.get(id=id)
   vacation.status = 'Approved'
   employee = models.user.objects.all().get(id = vacation.employee_id.id)
   employee.available_vacation -= 1
   employee.actual_approved_vacations += 1
   employee.save() 
   vacation.save()
   return HttpResponseRedirect(reverse(AllVacations))

def search_employee(request):
    template = loader.get_template('Search.html')
    return HttpResponse(template.render())

def search_result(request):
    if 'record_id' in request.GET:
        record_id = request.GET['record_id']
        records = user.objects.filter(id=record_id)
        template = loader.get_template('Result.html')
        context = {
            'records': records,
        }
        return HttpResponse(template.render(context, request))


@csrf_exempt
def submit_vacation(request):
        if request.method == 'POST':
            employee_id = request.POST.get('employee_id')
            print(f"Employee ID: {employee_id}")
            user_object = get_object_or_404(user, id=employee_id)
            print(f"User Object: {user_object}")
            user2 = user.objects.get(id=request.POST.get('employee_id'))
            vacation_duration = request.POST.get('vacation_duration')
            print(f"vd: {vacation_duration}")
            from_date = request.POST.get('From')
            to_date = request.POST.get('To')
            reason = request.POST.get('reason')
            status = 'Submitted'
            employee_name = user2.name
            vacation = vacations.objects.create(
                employee_id=user2.id,
                vacation_duration=vacation_duration,
                From=from_date,
                To=to_date,
                reason=reason,
                status=status,
                employee_name=employee_name
            )

            return JsonResponse({'message': 'Vacation submitted successfully'})
        else:
            return JsonResponse({'error': 'Invalid request method'}, status=400)

    
def updateInfo(request,id):
        if request.method == 'POST':
            user1 = user.objects.get(id = id)
            user1.name = request.POST.get('name')
            user1.id = request.POST.get('id')
            user1.e_mail = request.POST.get('email')
            user1.phone_number = request.POST.get('phone')
            user1.marital = request.POST.get('marital_status')
            user1.available_vacation = request.POST.get('available_vacation')
            user1.actual_approved_vacations= request.POST.get('actual_approved_vacations')
            user1.salary = request.POST.get('salary')
            user1.save()
            return(AllEmployees(request))





