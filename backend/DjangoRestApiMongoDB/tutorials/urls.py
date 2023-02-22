from django.urls import re_path as url 
from tutorials import views 

#nuevo para react###########
from django.contrib import admin
# add include to the path
from django.urls import path, include
 
# import views from todo
from tutorials import views
 
# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers
####################################
 

###nuvo raect###
# create a router object
router = routers.DefaultRouter()
 
# register the router
router.register(r'tutorials',views.TutorialsView, 'tutorials')
########################################
urlpatterns = [ 
    url('admin/', admin.site.urls),
    url(r'^api/tutorials$', views.tutorial_list),
    url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
    url(r'^api/tutorials/published$', views.tutorial_list_published),
    url('api/', include(router.urls))
 
]

