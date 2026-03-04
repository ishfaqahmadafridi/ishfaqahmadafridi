"""
Setup script to ensure database is ready and admin user has proper permissions
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'store_backend.settings')
django.setup()

from django.contrib.auth.models import User

def setup_admin():
    """Ensure admin users have staff and superuser status"""
    print("Checking admin user permissions...")
    
    # Get all superusers
    superusers = User.objects.filter(is_superuser=True)
    
    if not superusers.exists():
        print("No superuser found. Please run: python manage.py createsuperuser")
        return
    
    for user in superusers:
        updated = False
        if not user.is_staff:
            user.is_staff = True
            updated = True
        if not user.is_superuser:
            user.is_superuser = True
            updated = True
        
        if updated:
            user.save()
            print(f"✓ Updated {user.username} - is_staff=True, is_superuser=True")
        else:
            print(f"✓ {user.username} already has proper permissions")
    
    print("\nAdmin setup complete!")
    print(f"Total admin users: {superusers.count()}")

if __name__ == '__main__':
    setup_admin()
