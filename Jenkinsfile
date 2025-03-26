pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nandhini1694/p'
        DOCKER_HUB_USER = 'nandhini1694'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/itsnandhu2004/devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "echo '${DOCKER_HUB_PASSWORD}' | docker login -u '${DOCKER_HUB_USER}' --password-stdin"
                    sh "docker push $DOCKER_IMAGE"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl apply -f kubernetes/deployment.yaml"
                    sh "kubectl apply -f kubernetes/service.yaml"
                }
            }
        }
    }
}

