pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                cd /home/ubuntu/aws-s3-upload-demo

                git pull origin main

                docker compose down

                docker compose up -d --build
                '''
            }
        }

    }
}