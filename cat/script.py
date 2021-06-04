from apps.academy.models import *

_ = 'Кибер'
Academy.objects.create(name=_, description='b')
ac = Academy.objects.filter(name=_).first()

print(ac.slug)
