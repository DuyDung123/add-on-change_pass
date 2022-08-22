import { SystemUtils } from "../utils/SystemUtils";
export class HosstMailModel {

    login = async (email, pasword) => {

        const systemUtils = new SystemUtils;

        if ($('input[name="loginfmt"]') !== null) {
            $('input[name="loginfmt"]').val(email);
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').focus();
        }
        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').click();
        }

        await systemUtils.sleep(1000);

        if ($('input[name="passwd"]') !== null) {
            $('input[name="passwd"]').val(pasword);
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').focus();
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').click();
        }
    }

    searchMessage = async () => {  

        const systemUtils = new SystemUtils;

        await systemUtils.sleep(2000);
        let btnOther = document.getElementsByClassName('threeColConversationViewSenderImageOn');
        if (btnOther.length > 0) {
            btnOther[1].click();
        }

        await systemUtils.sleep(3000);

        let btnError = $('button[class="ms-Button ms-Button--action ms-Button--command GMRugtYYURYKX1bCzPmL root-236"]');
        if(btnError.length > 0){
            $('button[class="ms-Button ms-Button--action ms-Button--command GMRugtYYURYKX1bCzPmL root-236"]')[0].click();
        }

        let itemMessages = $('div[class="ZtMcN"]');
        if (itemMessages.length > 0) {
            let qRcode = 0;
            let html = document.getElementsByClassName('ZtMcN');
            console.log(html);
            let regex = /(?<res>[0-9]{5,6})/gm;
            for (let i = 0; i < html.length; i++) {
                qRcode = systemUtils.regexString(html[i].innerHTML, regex);
                console.log(qRcode);
                if (qRcode != 0) {
                    break;
                }
            }
            if (typeof qRcode ==='undefined' || qRcode === 0) {
                regex = /c=(?<res>[0-9]{5,7})/gm;
                for (let i = 0; i < html.length; i++) {
                    html[i].click();
                    await systemUtils.sleep(1000);
                    let contentMail = document.getElementById('x_email_content');
                    qRcode = systemUtils.regexString(contentMail.innerHTML, regex);
                    if (typeof qRcode !=='undefined' && qRcode !== 0) {
                        console.log(qRcode);
                        break;
                    }
                }
            }
            if (typeof qRcode !=='undefined' && qRcode !== 0) {

                let data = {'codeEmail': qRcode };
                systemUtils.saveDataToStorage(data);

                await systemUtils.sleep(2000);
                const message = {};
                message.data = qRcode;
                message.type = 'request_closeTab';
                systemUtils.requestGetDataToBackground(message); 

            } else {
                await systemUtils.sleep(5000);
                window.location.href = "https://outlook.live.com/mail/0";
            }
        }
    }

    register = async (systemUtils, mail) =>{
        if ($('input[name="MemberName"]') !== null) {
            $('input[name="MemberName"]').val(mail.email);
        }

        await systemUtils.sleep(2000);

        if ($('select[name="LiveDomainBoxList"]') !== null) {
            $('select[name="LiveDomainBoxList"]').val('hotmail.com');
        }

        this.btnISignupAction(systemUtils);

        if ($('input[name="Password"]') !== null) {
            $('input[name="Password"]').val(pasword);
        }

        this.btnISignupAction(systemUtils);

        if ($('input[name="LastName"]') !== null) {
            $('input[name="LastName"]').val(mail.email);
        }

        await systemUtils.sleep(1000);

        if ($('input[name="FirstName"]') !== null) {
            $('input[name="FirstName"]').val(mail.email);
        }

        this.btnISignupAction(systemUtils);
        
        if ($('select[name="BirthDay"]') !== null) {
            $('select[name="BirthDay"]').val('12');
        }

        await systemUtils.sleep(1000);

        if ($('select[name="BirthMonth"]') !== null) {
            $('select[name="BirthMonth"]').val('12');
        }

        await systemUtils.sleep(1000);

        if ($('input[name="BirthYear"]') !== null) {
            $('input[name="BirthYear"]').val('1997');
        }

        this.btnISignupAction(systemUtils);

        let btn = $('button[id="home_children_button"]')
    }

    btnISignupAction = async (systemUtils) =>{

        await systemUtils.sleep(1000);

        if ($('input[id="iSignupAction"]') !== null) {
            $('input[id="iSignupAction"]').focus();
        }

        await systemUtils.sleep(1000);

        if ($('input[id="iSignupAction"]') !== null) {
            $('input[id="iSignupAction"]').click();
        }

        await systemUtils.sleep(4000);
    }
}//dssdsd@outlook.com.vn/Dung@1234

{/* <Host appBase="webapps" autoDeploy="true" name="localhost" unpackWARs="true">

<!-- SingleSignOn valve, share authentication between web applications
     Documentation at: /docs/config/valve.html -->
<!--
<Valve className="org.apache.catalina.authenticator.SingleSignOn" />
-->

<!-- Access log processes all example.
     Documentation at: /docs/config/valve.html
     Note: The pattern used is equivalent to using pattern="common" -->
<Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs" pattern="%h %l %u %t &quot;%r&quot; %s %b" prefix="localhost_access_log" suffix=".txt"/>
  
<Context docBase="web-jdbc-servlet" path="/web-jdbc-13-03-2020" reloadable="true" source="org.eclipse.jst.jee.server:web-jdbc-servlet"/></Host> */}