import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer';
import { Body } from "../../../shared/components/index-components/body/body";

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [FooterComponent, Body],
  templateUrl: './IndexPage.html',
  styleUrl: './IndexPage.css',
})
export class IndexPage { }
