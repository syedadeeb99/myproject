
pipeline {

    agent any

    environment {

        MONGODB_URI = 'mongodb://mongo:27017/Adeebuddin'

    }

    stages {

        stage('Build') {

            steps {

                script {

                    // Install dependencies

                    sh 'npm install'

                }

            }

        }

        stage('Test') {

            steps {

                script {

                    // Run tests

                    sh 'npm test'

                }

            }

        }

        stage('Deploy') {

            steps {

                script {

                    // Deploy the application

                    sh 'npm start'

                }

            }

        }

    }

}
