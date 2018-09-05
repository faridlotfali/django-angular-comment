from rest_framework import serializers
from .models import Note,Comment

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('title', 'body')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id','comment', 'like', 'dislike', 'star' ,'numberOfReviews')