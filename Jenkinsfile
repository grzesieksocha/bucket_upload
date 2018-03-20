pipeline {
    agent { docker { image 'node:9.8.0-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}