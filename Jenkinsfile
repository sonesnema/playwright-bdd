def roundValue=3.57778
def keyFromJenkin
def arryaProd
pipeline {

    agent any
    environment {
        PATH = "${env.PATH}C:/bin/allure-2.23.1/bin"
        EXAMPLE_KEY = credentials('NEW_SECRET') // Secret value is 'sec%ret'
    }
     
    stages {

        
        stage ('BuildUIAutomationTestScript') {
            steps {
    //             withCredentials([string(credentialsId: 'secretKeyNew' , variable: 'password_from_js')]) {
                    
    //                 bat "npm install"
    //                 bat "npm run encrypt \"%EXAMPLE_KEY%\""    
	// }        
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
                //  bat "npm run encrypt \"%EXAMPLE_KEY%\"" 
                echo "printing deafult value"
                echo "${params.commaSeperated}"
         
                // sh """#!/bin/bash
                //  "SECRET=\"%EXAMPLE_KEY%\" npx bddgen && npx playwright test"
                //  """
                script {
                    def stringTake=params.commaSeparated
                    echo "${stringTake}"
                    def arrayProd = stringTake.split(',')

                    if(arrayProd[0]=='ComplianceCatalyst')
                    {
                        echo "first object is compliance catalyst"
                    }
                    else{
                        echo "first object is not compliance catatlyt "
                    }

                    
                }
                
            }
         
        }
        
 
}
  post {
      
	  always {
        
        //  archiveArtifacts artifacts: 'reports/test-results.json'
        cleanWs()
	  	  
	  }
}
  }