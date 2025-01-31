def roundValue=3.57778
def keyFromJenkin
def arryaProd
pipeline {

    parameters {
        string(name: 'INDEX', defaultValue: '1', description: 'Enter index (0-based)')
    }
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
               script {
                    def arrayProd = params.commaSeparated.split(',')

                    // Convert index to integer
                    def index = params.INDEX.toInteger()

                    // Check if index is within valid range
                    if (index >= 0 && index < arrayProd.size()) {
                        def selectedValue = arrayProd[index]
                        echo "Selected Value at Index ${index}: ${selectedValue}"
                    } else {
                        echo "Index out of bounds! Valid range: 0 to ${arrayProd.size() - 1}"
                    }
                // sh """#!/bin/bash
                //  "SECRET=\"%EXAMPLE_KEY%\" npx bddgen && npx playwright test"
                //  """
                
            }
         
        }
        stage('Read Json'){
            steps{
                   script{
                //    def projects = readJSON file: 'reports/test-results.json'
                echo "test"
                // roundValue=roundValue.toBigDecimal().setScale(2,BigDecimal.ROUND_HALF_UP)
                // echo "${roundValue}"
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
}