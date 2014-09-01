package com.ericsson.Util;
import java.io.FileInputStream;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Properties;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
public class WebConnector {
	
	static WebConnector w;
	WebDriver driver=null;
	WebDriver mozilla=null;
	Properties OR = null;
	Properties CONFIG = null;
	
private WebConnector(){
		
		if(OR==null){
			try{
				// initialize OR
				OR = new Properties();
				FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\com\\ericsson\\config\\OR.properties");
				OR.load(fs);
				CONFIG = new Properties();
				FileInputStream fs1  = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\com\\ericsson\\config\\CONFIG.properties");
				CONFIG.load(fs1);
}
		
		catch(Exception e){
			System.out.println("Error on intializing properties files");
		}
		
}

}


public void openBrowser(String Browser){
	try{
	if(Browser.equals("Mozilla") && mozilla==null){
	driver = new FirefoxDriver();
	}
	
	}catch(Exception e){
		System.out.println("Incorrect Inputs entered");
	}
	driver.manage().window().maximize();
	// implicit wait
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
}


public void navigate(String URL){
	
	driver.get(CONFIG.getProperty(URL));
	
}
public void click(String Links){
	driver.findElement(By.xpath(OR.getProperty(Links))).click();
	
}

public boolean verify_text(String Search_Text,String Expected_Result){
	WebElement x=driver.findElement(By.xpath(OR.getProperty(Search_Text)));
	String search=x.getText();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	System.out.println(search);
	
	if(search.equalsIgnoreCase(Expected_Result)){
		return true;
	}
	else{return false;}
	
	
}

public void driverclose(){
	driver.quit();
	
}

public boolean verify_footer(String Footer_Text,String Footer_Box ){
	boolean match = false;
	WebElement rootElement=driver.findElement(By.xpath(OR.getProperty(Footer_Box)));
List<WebElement> footer=rootElement.findElements(By.tagName("h3"));
 for(WebElement elem:footer){
	  String elementText=elem.getText();
	//  System.out.println(elementText);
	  if (elementText.contains(Footer_Text)){
		  match = true;
		  break;
		  
	  }
	 }
 return match;	
}

 public void selectDropDown(String RequireSite,String drpDwn){
	 
	driver.findElement(By.xpath(OR.getProperty(drpDwn))).sendKeys(CONFIG.getProperty(RequireSite));
	
	 
 }
 public void enter(String Field,String text){
	 driver.findElement(By.xpath(OR.getProperty(Field))).sendKeys(text);
 }
 
 public boolean verify_login_msg(String WelcomeMsg1,String MyName){
	 driver.switchTo().frame("upper");
	 
	// driver.get("https://ebusiness.ericsson.net/general/UpperNavigationRibbon.aspx?header=noname");
	 
	 String s= driver.findElement(By.xpath(OR.getProperty(WelcomeMsg1))).getText();
	 String s1="You are logged in as "+MyName;
	 System.out.println(s);
	 System.out.println(s1);
	if( s.equalsIgnoreCase(s1) )
	{return true;}
	else{
		return false;
	}
	
	
	
	
 }
 
 
public static WebConnector getInstance(){
	if(w==null)
		w= new WebConnector();
	
	return w;
}
}		