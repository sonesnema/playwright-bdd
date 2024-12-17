pipeline {

    agent any
    environment {
        PATH = "${env.PATH}C:/bin/allure-2.23.1/bin"
    }
        
    stages {

        stage ('BuildUIAutomationTestScript') {
            steps {
                catchError() {
                dir("qc_automation/RTS7UI_Playwright_Automation/") {
                    echo "..........npm installing.........."
                    bat "npm install --global cross-env"
                    bat "npm install"
                    bat "npx playwright install"
  
        }}}
        }
        stage ('Run Test') {

            steps{
                bat "npm run test"
            }
        }
 
}
  post {
      
	  always {
         
        cleanWs()
	  	  
	  }
}
  }