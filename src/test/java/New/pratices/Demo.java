package New.pratices;

import org.openqa.selenium.WebElement;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;



public class Demo extends BaseClass {
	@DataProvider(name="login")
		public Object [][]getData(){
			return new Object[][] {{"arunkumar@gmail.com","password"}};
	}
	
		
	}
