def roundValue=3.57778
def keyFromJenkin
pipeline {

    agent any
    environment {
        PATH = "${env.PATH}C:/bin/allure-2.23.1/bin"
        EXAMPLE_KEY = credentials('SECRET_KEY') // Secret value is 'sec%ret'
    }
        
    stages {

        
        stage ('BuildUIAutomationTestScript') {
            steps {
                withCredentials([string(credentialsId: 'secretKeyNew' , variable: 'password_from_js')]) {
                    
                    bat "npm install"
                    bat "npm run encrypt --env=%EXAMPLE_KEY%"    
	}        
                catchError() {
                dir("qc_automation/RTS7UI_Playwright_Automation/") {
                    echo "..........npm installing.........."
    
                    // bat "npm install --global cross-env"
                    // bat "npm install"
                    // bat "npx playwright install"
  
        }}}
        }
        stage ('Run Test') {

            steps{
                // bat "npm run test"
                echo "..........npm installing.........."
             
            }
         
        }
        stage('Read Json'){
            steps{
                   script{
                   def projects = readJSON file: 'reports/test-results.json'
                echo "${projects.suites[0].title}"
                roundValue=roundValue.toBigDecimal().setScale(2,BigDecimal.ROUND_HALF_UP)
                echo "${roundValue}"
            }
            }
        }
 
}
  post {
      
	  always {
        
         archiveArtifacts artifacts: 'reports/test-results.json'
        cleanWs()
	  	  
	  }
}
  }