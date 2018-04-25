// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";

// @Injectable()
// export class BusinessService {
//     private readonly url = '/business';

//     constructor(public http: HttpClient) {}

//     public getBusinesses(ownerId) {
//         const hdrsObj = new HttpHeaders();
//         hdrsObj.set('owner', ownerId);

//         return this.http.get(this.url, { headers: hdrsObj });
//     }

//     public claimBusiness(ownerId, businessId) {
//         const hdrsObj = new HttpHeaders();
//         hdrsObj.set('owner', ownerId);
//         // hdrsObj.set('business', businessId);

//         return this.http.patch(`${this.url}/claim/${businessId}`, { headers: hdrsObj });
//     }

//     public declaimBusiness(ownerId, businessId) {
//         const hdrsObj = new HttpHeaders();
//         hdrsObj.set('owner', ownerId);
//         // hdrsObj.set('business', businessId);

//         return this.http.patch(`${this.url}/declaim/${businessId}`, { headers: hdrsObj });
//     }

//     public editBusiness(business) {
//         return this.http.patch(`${this.url}/${business._id}`, business);
//     }
// }