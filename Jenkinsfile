pipeline {
    agent { docker { image "node:9.8.0-alpine" } }
    stages {
        stage("build") {
            steps {
                sh "npm --version"
                sh "npm install"
            }
        }
        stage("Download config") {
            steps {
                withAWS(
                    region:"eu-central-1",
                    credentials:"joOfVyOeKO2mYx9f7nav98Y7SXQZKqOpZPfSe18D"
                ) {
                    s3Download(
                        file:"config/config.json",
                        bucket:"greg-upload-bucket",
                        path:"config/config.json"
                    )
                }
            }
        }
        stage("Test") {
            steps {
                sh "npm test"
            }
        }
    }
    post {
        always {
            withAWS(
                region:"eu-central-1",
                credentials:"joOfVyOeKO2mYx9f7nav98Y7SXQZKqOpZPfSe18D"
            ) {
                s3Upload(
                    bucket:"greg-upload-bucket",
                    includePathPattern:"**/*",
                    excludePathPattern:"node_modules/**/*",
                    path:"app/upload_${BUILD_NUMBER}/"
                )
            }
            deleteDir()
        }
        success {
            echo 'Success!!! Project tested and uploaded!'
        }
        unstable {
            echo 'Something is not going right' 
        }
        failure {
            echo 'Fatal failure!'
        }
        changed {
            echo 'Some changes implemented'
        }
    }
}
