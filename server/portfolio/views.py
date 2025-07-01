from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm  

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            full_message = f"From: {name} <{email}>\n\n{message}"

            send_mail(
                subject=subject,
                message=full_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
            )

            return render(request, "email_confirmation.html")
    else:
        form = ContactForm()

    return render(request, "email_form.html", {"form": form})