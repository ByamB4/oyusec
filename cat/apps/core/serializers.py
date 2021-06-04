from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AuthLoginSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(AuthLoginSerializer, cls).get_token(user)
        return token
