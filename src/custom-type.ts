type Name = string;
type NameResolve = () => string;
type NameOrResolve = Name | NameResolve;

function getName(n: NameOrResolve): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}


type EventNames = 'click' | 'scroll' | 'mouseover';

function handleEvent(el: Element, ev: EventNames) {
  // pass
}

handleEvent(document.getElementById('#el'), 'click');
// handleEvent(document.getElementById('#el'), 'touchstart');