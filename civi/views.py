from django.shortcuts import render, redirect
from .models import Skill, Project
from .forms import ContactForm
from django.core.mail import send_mail
from django.contrib import messages


def home(request):
    skills = Skill.objects.all()[:4]

    return render(request, 'home.html', {
        'skills': skills
    })


def about(request):
    return render(request, 'about.html')

'''
def portfolio(request):
    projects = Project.objects.all()

    return render(request, 'portfolio.html', {
        'projects': projects
    })

'''
def portfolio(request):

    projects = Project.objects.all()

    return render(
        request,
        'portfolio.html',
        {
            'projects': projects
        }
    )
    
def skills(request):
    skills = Skill.objects.all()

    return render(request, 'skills.html', {
        'skills': skills
    })


def contact(request):

    if request.method == "POST":

        form = ContactForm(request.POST)

        if form.is_valid():
            contact = form.save()

            send_mail(
                subject=f"New Contact Message from {contact.name}",
                message=f"""
Name: {contact.name}
Email: {contact.email}

Message:
{contact.message}
""",
                from_email="yourgmail@gmail.com",
                recipient_list=["yourgmail@gmail.com"],
                fail_silently=False,
            )

            messages.success(request, "Message sent successfully!")
            return redirect("contact")

    else:
        form = ContactForm()

    return render(request, "contact.html", {
        "form": form
    })
'''
def contact(request):

    if request.method == "POST":

        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('contact')

    else:
        form = ContactForm()

    return render(request, 'contact.html', {
        'form': form
    })
    '''