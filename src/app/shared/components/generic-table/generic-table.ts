import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'generic-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './generic-table.html',
  styleUrl: './generic-table.css',
})
export class GenericTable<T> {

  @Input({required: true}) data: T[] = [];

  @Input({required: true}) columns: {key: keyof T, label: string}[] = [];

  @Input() tableClass = '';

  get displayedColumns(): string [] {
    return this.columns.map(c => c.key.toString());
  }

 }
