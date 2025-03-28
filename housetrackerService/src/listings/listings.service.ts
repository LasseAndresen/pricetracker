import { Injectable } from '@nestjs/common';
import {DataSource} from "typeorm";
import {Listing} from "../entity/entities";
import {ListingDto} from "@housetracker/shared-dtos";

@Injectable()
export class ListingsService {

  constructor(private _dataSource: DataSource) {}
  public async addListing(url: string, userID: number) {
    // Add to listings if missing
    const existingListing = await this._dataSource
      .getRepository(Listing)
      .createQueryBuilder("listing")
      .where("listing.url = :url", {url})
      .getOne();

    // If the listing exists, there's no need to add it again.
    if (!existingListing) {
      console.log('Listing did not exist. Adding it.');
      // Add Listing
      const newListing = new Listing();
      newListing.url = url;
      newListing.externalid = 'test';
      newListing.title = 'test';
      newListing.description = 'test';
      newListing.pricedkk = 100;
      newListing.imageurl = 'test';
      newListing.location = 'test';
      newListing.available = true;
      newListing.dateadded = new Date();
      await newListing.save();
    } else {
      console.log('Listing already exists. Skipping. ', existingListing);
    }

    // Add UserListing link
  }

  public getListings(): ListingDto[] {
    return [];
  }
}
