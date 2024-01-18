package New.pratices;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;


public class DataProvider extends BaseClass {
	@Parameters({"browser"})
	@Test
	private void tco1(String browser) {
		getDriver(browser);
		url("https://www.facebook.com/");
	}
}
