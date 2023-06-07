# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'ListaDeCompras', views.ListaDeComprasViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('create_item/', views.create_item),
    path('update_item/', views.update_item),
    path('get_table/', views.get_table),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]