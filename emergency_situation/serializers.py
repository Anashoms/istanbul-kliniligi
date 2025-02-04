from rest_framework import serializers

from .models import EmergencySituation
from hasta.serializers import HastaNameSerializer, FamilyNameSerializer
from hasta.models import Hasta, Family


class EmergencySituationSerializer(serializers.ModelSerializer):
    hasta = HastaNameSerializer(read_only=True, required=False)
    family = FamilyNameSerializer(read_only=True, required=False)
    applicant = HastaNameSerializer(read_only=True, required=False)

    hasta_id = serializers.PrimaryKeyRelatedField(queryset=Hasta.objects.all(), source='hasta', write_only=True, required=False)
    applicant_id = serializers.PrimaryKeyRelatedField(queryset=Hasta.objects.all(), source='applicant', write_only=True, required=False)
    family_id = serializers.PrimaryKeyRelatedField(queryset=Family.objects.all(), source='family', write_only=True, required=False)

    class Meta:
        model = EmergencySituation
        fields = '__all__'
