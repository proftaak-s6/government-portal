import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Owner } from 'src/entities/Owner';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { PersonalInfo } from 'src/entities/PersonalInfo';

@Component({
  selector: 'rr-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.less']
})
export class OwnerManagementComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private displayedColumns: string[] = ['fullName', 'address', 'country', 'actions'];
  private dataSource: MatTableDataSource<Owner> = new MatTableDataSource<Owner>();

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ownerService.findAll().subscribe(owners => {
      this.dataSource = new MatTableDataSource<Owner>(owners);
      this.dataSource.paginator = this.paginator;
    });
  }

  openAddOwnerDialog() {
    console.log("Add owner dialog clicked");
    const personalInfo: PersonalInfo = new PersonalInfo("Niels", "Werkman", new Date(1993, 10, 2), "Enschotsestraat", "33B", "3123SS", "Tilburg", "The Netherlands")
    const owner: Owner = new Owner(personalInfo)
    this.ownerService.save(owner).subscribe(x => {
      this.getData();
    });
  }

  openEditOwnerDialog(){
      
  }

  openDeleteOwnerDialog(){
      
  }
}
