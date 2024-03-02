pipeline {
    agent any
    
    environment {
        NODEJS_HOME = tool 'NodeJS' // Use the NodeJS installation configured in Jenkins
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/syedadeeb99/myproject.git' // Checkout the source code from your version control system
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install' // Install Node.js dependencies
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test' // Run tests
            }
        }

        stage('Deploy') {
            steps {
                // If you have a deployment step, you can add it here
            }
        }
    }

    post {
        always {
            // Clean up or perform any post-build actions
        }
    }
}
