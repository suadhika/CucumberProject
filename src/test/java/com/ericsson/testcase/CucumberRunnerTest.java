package com.ericsson.testcase;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(  format = {
        "pretty",
        "html:output/cucumber-html-report",
        "json:output/cucumber_report.json",
        "junit:output/allcukes.xml"
    },
		features={"src/test/resource/com/ericsson/"},
		glue={"com.ericsson.testcase"})
public class CucumberRunnerTest {

}
