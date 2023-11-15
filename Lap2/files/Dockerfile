# 
FROM python:3.9

# 
WORKDIR /code

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY ./4docker /code/app

# Thiết lập biến môi trường
ENV PORT=5000

# Mở cổng cho ứng dụng web
EXPOSE $PORT
# 
CMD [ "python", "./app/app.py" ]
