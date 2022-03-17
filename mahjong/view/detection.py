from flask import Blueprint, render_template

detection = Blueprint('detection ', __name__)


@detection.route('/')
def show():    
        return render_template(
                'detection/index.html'
        )


