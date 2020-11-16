import { Email } from '../utils/email.model';
import { Social } from '../utils/social.model';

export class Contact {

  emails?: Email[];
  social?: Social[];

  constructor(contactInfo?: {emails?: Email[], social?: Social[]}){
    this.emails = contactInfo?.emails ?? undefined;
    this.social = contactInfo?.social ?? undefined;
  }


}
