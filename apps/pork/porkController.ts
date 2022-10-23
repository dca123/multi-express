import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/v1")
export class PorkController {
  @Get("/info")
  getInfo() {
    return {
      info: "Bacon ipsum dolor amet swine ham hock short loin, strip steak chuck flank jowl bacon pork. Alcatra pastrami tongue, kielbasa cupim boudin doner. Ham fatback shankle prosciutto. Biltong cow frankfurter flank tail, buffalo tri-tip pork chop shoulder andouille. Ribeye frankfurter short loin shank cupim hamburger tri-tip landjaeger venison alcatra drumstick turducken kielbasa. Short ribs sirloin leberkas turkey. Pork belly jowl kevin, biltong hamburger pork loin shankle picanha jerky kielbasa pancetta.",
    };
  }
}
