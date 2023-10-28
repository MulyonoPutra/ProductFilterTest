import { Directive, ElementRef, Input, Output } from '@angular/core';
import {
	Observable,
	debounceTime,
	distinctUntilChanged,
	filter,
	fromEvent,
	map,
} from 'rxjs';

type EventArg = { target: { value: string } };
@Directive({
	selector: '[appSearch]',
	standalone: true,
})
export class SearchDirective {
	constructor(private hostRef: ElementRef) {}

	@Input() debounceTime: number = 1000;
	@Input() minLength: number = 1000;
	@Output() search: Observable<string> = fromEvent<EventArg>(
		this.hostRef.nativeElement,
		'keyup',
	).pipe(
		debounceTime(this.debounceTime),
		map((eventArg: EventArg) => {
			return eventArg.target.value;
		}),
		filter((term: string) => {
			return term.length >= this.minLength;
		}),
		distinctUntilChanged(),
	);
}
