export class MarsPhoto {
  async getMarsPhoto() {
    try{
      let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Error:" + error.message);
    }
  }
}

export class DailyPhoto {
  async getDailyPhoto() {
    let response2 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.daily_photo}`);

    let jsonifiedResponse2 = await response2.json();
    return jsonifiedResponse2;
  }
}


export class AsteroidFinder {
  async getAsteroidFinder(startYearInput, startMonthInput, startDayInput, endYearInput, endMonthInput, endDayInput) {
    let response3 = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startYearInput}-${startMonthInput}-${startDayInput}&end_date=${endYearInput}-${endMonthInput}-${endDayInput}&api_key=1st28qLFBRh0Cmh6DI1nLYBSAeQgF8A1ML0PSa8g`);

    let jsonifiedResponse3 = await response3.json();
    return jsonifiedResponse3;
  }
}
