pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/iamgajanan/aws-s3-upload-demo.git'
            }
        }

        stage('Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}