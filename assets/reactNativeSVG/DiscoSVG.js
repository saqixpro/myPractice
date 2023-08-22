import React from 'react';
import { SvgXml } from 'react-native-svg';

export const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.47 241.27">
  <path d="m185.87,52.21c8.58,3.88,14.08,7.95,18.99,12.8,6.89,6.81,13.35,14.02,18.37,22.35,6.07,10.05,8.77,21.06,8.59,32.78-.12,7.67-.81,15.3-2.47,22.8-1.31,5.95-3.9,11.36-7.17,16.47-3.07,4.79-6.39,9.37-10.27,13.52-5.18,5.55-11.4,9.57-18.35,12.54-8.98,3.84-18.22,6.68-27.98,7.6-7.11.67-14.11-.26-21.04-1.8-5.38-1.2-10.69-2.64-15.75-4.87-6.44-2.84-11.96-7.05-17.28-11.57-5.5-4.67-10.68-9.64-14.91-15.53-4.74-6.6-7.59-14.01-9.38-21.87-2.26-9.86-1.42-19.74-.12-29.61.87-6.58,2.48-12.97,5.04-19.11,2.88-6.9,7.49-12.57,12.7-17.8,7.95-7.99,16.76-14.82,26.58-20.4,10.58-6.02,21.74-7.34,33.52-4.95,8.04,1.63,15.7,4.37,20.92,6.65Zm41.28,50.49c.1.06.22.18.29.16.15-.07.05-.18-.02-.27-.58-3.1-3.44-10.12-4.84-11.77.06,1.26.1,2.39.17,3.53.11,1.69-.25,3.64.48,5,.76,1.41,2.57,2.26,3.93,3.36Zm-123.15,51.76s-.08-.1-.11-.15c0,.06,0,.12.01.18-.72,2.68-.92,5.45-1.47,8.16-.07.36.11.66.36.91,1.25,1.28,2.52,2.54,3.74,3.84.53.57.8.47,1.03-.22.72-2.14,1.45-4.27,2.21-6.39.14-.38.08-.63-.2-.9-1.88-1.79-3.58-3.76-5.57-5.44Zm-10.43-46.41c-.05-.07-.1-.14-.15-.21-.02.09-.05.19-.07.28-1.69,6.35-2.61,12.84-3.63,19.32-.04.26,0,.46.1.71.47,1.15.87,2.32,1.3,3.48.83,2.22,1.62,4.45,2.93,6.69.12-.41.21-.6.23-.8.79-7.29,1.89-14.52,3.97-21.57.12-.39.08-.76-.15-1.1-1.51-2.27-3.02-4.53-4.53-6.8Zm40.22,14.68c-.59.81-.09,1.05.17,1.33,4.03,4.33,8.19,8.52,12.55,12.52.58.53.86.54,1.39-.02,4.13-4.4,8.28-8.78,12.45-13.14.52-.55.51-.87-.04-1.39-4.45-4.21-8.75-8.57-12.97-13-.7-.73-.98-.53-1.53.1-2.8,3.2-5.65,6.36-8.47,9.54-1.27,1.43-2.52,2.88-3.54,4.06Zm15.27,15.58c-.33.61.23.74.46.94,4.41,3.94,8.99,7.68,13.61,11.37.62.5,1.07.55,1.71-.05,4.28-4.04,8.2-8.39,11.89-12.97.45-.56.48-.84-.1-1.28-4.69-3.61-9.13-7.51-13.44-11.57-.63-.6-.91-.44-1.39.07-4.11,4.37-8.23,8.72-12.35,13.07-.15.15-.29.31-.39.41Zm13.1-17.38c.51.24.64-.26.87-.51,3.52-3.87,7.01-7.76,10.56-11.59.57-.61.46-.88-.07-1.4-4.17-4.01-8.23-8.12-12.17-12.36-.55-.59-.88-.53-1.42-.04-3.88,3.57-7.65,7.25-11.3,11.06-.59.62-.44.88.06,1.4,4.19,4.35,8.45,8.62,12.79,12.83.21.21.44.4.67.62Zm-14.46,19.55c-.47-.57-.71-.05-.98.23-3.87,3.89-7.8,7.73-11.84,11.44-.46.42-.62.63-.03,1.15,4.07,3.62,8.18,7.19,12.4,10.65.47.38.72.36,1.18.03,4.68-3.35,9.14-6.97,13.48-10.74.48-.41.47-.58-.05-.99-2.77-2.19-5.52-4.42-8.23-6.68-2-1.66-3.94-3.38-5.91-5.08Zm-26.36-.98c-.48.46-.14.78.16,1.09,3.46,3.52,7.02,6.94,10.67,10.27.41.37.62.41,1.03.03,4.08-3.8,8.08-7.68,12.02-11.62.41-.41.45-.66-.03-1.1-4.42-4-8.61-8.24-12.68-12.59-.4-.43-.58-.56-1.04,0-3.67,4.44-7.12,9.04-10.12,13.94Zm56.15,21.68c.69.31.72.35,1.14.05,5.3-3.75,10.31-7.8,14.2-13.08.55-.75.16-.91-.35-1.21-4.34-2.55-8.59-5.24-12.65-8.22-.58-.43-.97-.46-1.46.16-3.68,4.69-7.67,9.1-12.05,13.16-.56.52-.44.71.11,1.11,1.53,1.08,2.98,2.27,4.49,3.37,2.24,1.63,4.51,3.22,6.56,4.67Zm.58-26.33c.83.65,1.02-.29,1.25-.59,3.13-4.05,6.11-8.2,9.02-12.4.41-.6.33-.98-.21-1.4-4.07-3.18-7.9-6.64-11.66-10.17-.58-.55-.88-.54-1.42.06-3.47,3.88-6.98,7.72-10.5,11.55-.49.53-.44.85.08,1.3,1.92,1.7,3.77,3.47,5.7,5.14,2.55,2.2,5.16,4.33,7.74,6.49Zm-56.6-25.81c-.49.51-.04.88.29,1.26,3.14,3.59,6.29,7.16,9.4,10.77.61.71.88.56,1.42-.06,3.91-4.49,7.83-8.98,11.82-13.4.67-.75.54-1.08-.06-1.72-3.05-3.26-6.08-6.55-9.06-9.88-.56-.62-.85-.55-1.38-.04-2.39,2.36-4.86,4.64-7.21,7.04-1.85,1.88-3.58,3.88-5.22,6.03Zm-10.89-13.83c-.4.55.02.9.28,1.27,2.57,3.72,5.47,7.18,8.29,10.69.44.55.7.6,1.14.04,3.64-4.68,7.89-8.79,12.27-12.76.61-.55.61-.87.1-1.49-2.84-3.45-5.57-6.99-8.1-10.68-.55-.8-.85-.65-1.41-.09-2.65,2.64-5.37,5.21-7.99,7.89-1.6,1.64-3.06,3.42-4.58,5.14Zm75.97-1.3c.41-.31-.28-.56-.5-.77-3.16-3.15-6.36-6.27-9.52-9.42-.48-.48-.8-.5-1.37-.14-4.25,2.7-8.35,5.59-12.22,8.83-.66.55-.55.82-.04,1.33,3.8,3.84,7.56,7.71,11.36,11.55,1.28,1.29,1.32,1.27,2.55-.15,3.18-3.66,6.35-7.33,9.73-11.24Zm15.66,39.11c.12-.25.38-.84.67-1.41.21-.42.15-.65-.27-.93-3.89-2.54-7.74-5.14-11.45-7.93-.34-.26-.61-.46-1,.12-3,4.45-6.12,8.81-9.45,13.02-.4.51-.3.74.22,1.07,1.01.63,1.95,1.37,2.93,2.04,3.25,2.2,6.56,4.31,9.94,6.29.47.27.79.47,1.24-.19,2.54-3.8,4.81-7.76,7.16-12.09Zm-22.19,29.83c3.89,2.61,7.87,4.68,11.91,6.64.51.25.89.3,1.37-.13,4.64-4.15,9.13-8.43,12.77-13.52.5-.71.31-.93-.36-1.3-3.14-1.73-6.3-3.44-9.35-5.32-1.05-.65-1.46-.41-2.06.43-1.53,2.11-3.27,4.02-5.15,5.83-2.79,2.69-5.89,5-9.12,7.38Zm-34.09,2.81c-.19-.18-.3-.3-.43-.4-4.09-3.53-8.18-7.04-12.25-10.59-.47-.41-.69-.35-1.13.04-3.98,3.65-7.98,7.27-11.99,10.88-.53.48-.51.71.03,1.17,2.58,2.15,5.13,4.33,7.66,6.55.44.38.81.33,1.28.25,6.33-1.05,11.57-4.39,16.82-7.9Zm-20.3-85.74c-.1.36.21.59.4.85,2.61,3.69,5.33,7.3,8.18,10.81.5.62.81.64,1.39.12,3.92-3.53,7.86-7.05,11.83-10.54.56-.49.54-.75.07-1.3-2.67-3.16-5.11-6.51-7.29-10.02-.51-.81-.83-.76-1.55-.29-4.49,2.91-8.55,6.34-12.53,9.9-.16.14-.31.3-.5.48Zm-11.46,41.52c-.98,1.8-1.72,4.18-2.77,6.43-.32.68-.1,1.12.32,1.59,2.08,2.42,4.13,4.87,6.23,7.27,1.53,1.75,1.56,1.72,2.75-.18.09-.14.2-.28.3-.42,2.76-4.16,5.75-8.14,8.96-11.97.48-.58.43-.9-.05-1.44-3.14-3.53-6.25-7.08-9.34-10.66-.5-.58-.72-.75-1.23.02-1.88,2.86-3.52,5.86-5.15,9.36Zm-4.57,5.43c2.34-5.91,4.91-11.44,8.39-16.51.41-.6.3-1.01-.15-1.56-2.88-3.47-5.76-6.95-8.34-10.65-.44-.63-.64-.67-1.12.03-3.38,4.86-5.7,10.2-7.44,15.82-.17.56-.2,1.04.19,1.55,2.79,3.7,5.56,7.41,8.47,11.31Zm26.79-33.11c-.21.5.29.73.53,1,2.95,3.24,5.95,6.43,8.88,9.68.64.71.95.64,1.57-.02,3.57-3.77,7.23-7.44,11.14-10.86.66-.58.58-.87.03-1.46-2.82-3.02-5.61-6.05-8.34-9.14-.66-.74-1.02-.65-1.69-.05-3.82,3.45-7.68,6.86-11.53,10.28-.19.17-.37.35-.6.56Zm39.83,69.21c-3.89-2.86-7.71-5.64-11.48-8.47-.57-.43-.85-.25-1.27.13-1.31,1.15-2.65,2.28-3.98,3.4-3.19,2.69-6.5,5.23-9.96,7.74,3.39,2.74,6.74,5.35,10.25,7.76.41.28.77.38,1.28.1,5.44-3,10.16-6.99,15.16-10.65Zm22.99-58.27c-2.94,4.94-4.64,10.33-7.32,15.25-.28.51-.07.72.33,1.03,3.62,2.71,7.39,5.2,11.11,7.76.63.44.95.28,1.25-.36.85-1.82,1.78-3.61,2.57-5.45,1.25-2.9,2.44-5.83,3.27-8.89.13-.47.36-.93-.26-1.34-3.75-2.51-7.35-5.24-10.96-8Zm-36.79,70.56c3.92,2.51,7.86,4.62,11.85,6.63.51.26.89-.01,1.31-.22,2.83-1.41,5.55-3.02,8.14-4.82,2.43-1.69,4.82-3.43,7.17-5.5-4.27-2.14-8.34-4.28-12.2-6.82-.43-.28-.74-.21-1.14.08-4.96,3.59-9.63,7.57-15.13,10.64Zm31.17-63.9c.97-2.65,2.42-4.89,3.52-7.29.21-.46.36-.8-.14-1.19-2.89-2.31-5.62-4.81-8.33-7.31-.39-.36-.56-.34-.9.04-3.39,3.98-6.78,7.95-10.22,11.89-.41.47-.27.66.08.99,3.74,3.53,7.6,6.92,11.58,10.18.51.42.79.5,1.18-.23,1.23-2.35,2.16-4.83,3.22-7.08Zm-42.28-30.72c-.25.5.18.67.38.88,2.83,3.11,5.71,6.19,8.52,9.32.51.57.81.54,1.32.08,3.75-3.29,7.83-6.16,12.06-8.8.72-.45.69-.69.12-1.27-2.71-2.82-5.38-5.68-8.02-8.56-.48-.52-.8-.68-1.49-.3-4.33,2.41-8.47,5.09-12.34,8.19-.2.16-.39.32-.55.45Zm-51.27,37.01c-.17.46-.26.65-.32.85-1.9,7.1-2.79,14.37-3.62,21.65-.11.93.07,1.67.63,2.37,1.62,1.99,3.22,3.98,4.85,5.96.21.25.54.63.77.6.43-.06.39-.57.47-.94,1.28-6.19,3.27-12.16,5.56-18.03.26-.67.23-1.2-.25-1.76-.77-.91-1.5-1.86-2.22-2.82-1.92-2.55-3.82-5.12-5.87-7.86Zm94.97,52.98c3.47,1.64,6.91,3.26,10.34,4.9.59.28.87-.1,1.21-.4,4.43-3.79,8.01-8.32,11.38-13.04.32-.45.26-.7-.25-.97-2.9-1.56-5.78-3.15-8.66-4.74-.46-.26-.69-.22-1.02.25-.9,1.29-1.84,2.55-2.85,3.77-3.09,3.75-6.61,7.08-10.15,10.24Zm-77.34-24.12c-1.57,3.14-2.71,6.46-4.03,9.7-1.35,3.32-1.38,3.31,1.28,5.79.12.12.23.26.35.37.86.76,1.67,2.04,2.59,2.12,1.04.1,1.83-1.32,2.7-2.1,3.3-2.95,6.55-5.95,9.81-8.94.3-.28,1.01-.46.29-1.14-3.47-3.2-6.94-6.4-10.19-9.83-.45-.48-.73-.42-1,.19-.57,1.29-1.2,2.55-1.8,3.83Zm89.09,6.24c.54.44.9.47,1.35-.28,2.54-4.29,4.06-9.05,6.21-13.52.33-.68-.14-.93-.57-1.2-2.56-1.62-5.15-3.21-7.7-4.85-.86-.55-1.28-.53-1.79.5-2.13,4.34-4.54,8.53-7.31,12.49-.55.78-.32,1.15.41,1.55,3.14,1.75,6.26,3.53,9.4,5.3Zm-65.11-84.97c-.16.45.17.68.34.95,2.16,3.44,4.6,6.68,7.15,9.85.43.53.71.51,1.2.11,3.86-3.14,7.99-5.86,12.35-8.25.59-.33.81-.54.25-1.18-1.77-2.02-3.49-4.1-5.18-6.19-.43-.53-.89-.59-1.47-.46-4.77,1.04-9.48,2.28-13.79,4.68-.3.17-.59.34-.85.49Zm-30.9,90.35c1.94-5.48,3.99-10.63,6.5-15.59,1.12-2.23,1.09-2.22-.53-4.05-2.16-2.44-4.28-4.91-6.49-7.45-.82,2.34-1.62,4.59-2.4,6.84-1.47,4.23-2.54,8.57-3.38,12.97-.09.47-.03.82.29,1.15,1.96,2,3.92,4,6.01,6.13Zm102.5-12.02c-.89,2.51-1.86,4.99-3.28,7.24-.35.55-.47.94.24,1.32,2.86,1.54,5.7,3.11,8.54,4.7.57.32.88.24,1.23-.33,2.42-3.94,4.69-7.94,6.17-12.36.28-.85.1-1.24-.57-1.65-2.73-1.67-5.47-3.34-8.18-5.05-.74-.47-1.11-.44-1.48.44-.82,1.92-1.77,3.79-2.66,5.69Zm-41.06,37.04c-4.11-2.04-7.91-4.21-11.6-6.57-.36-.23-.65-.01-.95.13-5.41,2.58-11.2,3.9-16.99,5.23-.67.15-1.4.18-2.08.59,1.76,1.04,3.44,1.98,5.06,3,2.11,1.33,4.33,1.95,6.88,1.88,3.95-.11,7.82-.59,11.64-1.54,2.68-.66,5.33-1.46,8.05-2.72Zm35.97-57.43c-.54,1.14-1.15,2.5-1.83,3.83-.28.57-.21.97.31,1.3,2.6,1.63,5.21,3.23,7.79,4.89.85.54,1.33.24,1.71-.51.64-1.26,1.23-2.54,1.89-3.78,1.67-3.18,2.61-6.56,2.95-10.12.05-.47.29-1-.3-1.39-2.41-1.6-4.81-3.21-7.2-4.84-.77-.53-1.11-.26-1.35.55-.98,3.41-2.3,6.69-3.97,10.08Zm-77.7,49.75c2.16,1.58,4.1,2.88,5.9,4.34,1.14.93,2.22.86,3.54.56,3.42-.76,6.84-1.52,10.21-2.45,2.69-.74,5.4-1.46,7.88-2.88-3.3-2.55-6.53-5.04-9.76-7.55-.52-.4-.9-.19-1.37.12-5,3.29-10.04,6.53-16.41,7.85Zm36.49-104.81c3.08,3.26,6.03,6.37,8.95,9.5.42.45.67.12.98-.06,4.13-2.4,8.26-4.8,12.4-7.18.55-.32.64-.52.16-.99-.88-.86-1.7-1.78-2.58-2.65-1.05-1.04-1.81-2.71-3.16-3.02-1.34-.31-2.91.37-4.37.68-4.14.87-8.23,1.92-12.38,3.72Zm10.97,11.26c-.06.37.23.51.43.71,2.9,2.98,5.88,5.89,8.87,8.78.72.69.99.41,1.44-.16,2.8-3.48,5.59-6.97,8.43-10.4.44-.54.42-.76-.04-1.22-1.7-1.66-3.39-3.34-5.03-5.06-.46-.48-.79-.42-1.29-.13-4.05,2.36-8.11,4.71-12.17,7.06-.22.13-.43.27-.64.41Zm-68.93,11.77c.13-.07.23-.08.28-.14,4.01-4.75,8.41-9.13,12.99-13.33.39-.36.37-.67.08-1.1-1.74-2.52-3.46-5.05-5.22-7.64-4.45,4.55-8.37,9.47-12.16,14.5-.26.35-.21.61-.03.92,1.28,2.3,2.6,4.59,4.06,6.78Zm68.27,89.55c2.2,1.42,4.48,2.3,6.65,3.39.3.15.58.08.87-.02,6.37-2.18,12.52-4.83,18.12-8.62.8-.54.8-.83-.11-1.22-2.95-1.26-5.89-2.54-8.79-3.9-.8-.37-1.3-.25-1.93.28-2.49,2.08-5.08,4.04-7.77,5.87-2.22,1.51-4.56,2.81-7.04,4.22Zm-58.12-113.71c-.39.65-.03,1.03.22,1.4,1.44,2.17,2.92,4.32,4.35,6.5.44.67.76.67,1.37.12,4.02-3.59,8.14-7.06,12.71-9.94.53-.33.57-.59.23-1.11-1.22-1.81-2.41-3.63-3.55-5.49-.35-.58-.7-.46-1.17-.28-4.5,1.83-8.79,4.01-12.44,7.28-.6.54-1.22,1.07-1.72,1.51Zm82.59,30.11c-.31.66-.55,1.36-.95,1.96-.57.86-.37,1.41.42,1.99,3.09,2.27,6.14,4.6,9.28,6.79.77.54.81.31.97-.43,1.12-4.88,1.51-9.86,2.04-14.82.06-.57-.17-.95-.61-1.31-1.68-1.39-3.34-2.78-4.98-4.22-.65-.58-.96-.45-1.3.3-1.5,3.31-3.15,6.54-4.89,9.74Zm.14-5.39l.22.11c.97-2.05,1.92-4.1,2.91-6.14.29-.59.24-.96-.29-1.42-1.66-1.46-3.29-2.96-4.88-4.5-.6-.58-.88-.44-1.36.16-2.79,3.49-5.62,6.95-8.46,10.4-.36.43-.48.76,0,1.18,2.59,2.27,5.18,4.54,7.76,6.83.53.47.81.38,1.1-.25.98-2.13,2-4.25,3.01-6.38Zm16.41,41.37c-.93,1.93-.91,1.89.63,2.84,2.29,1.4,4.56,2.84,6.82,4.28,1.14.73,1.35.68,1.63-.61,1.07-5.06,1.64-10.19,2.1-15.34.05-.53,0-.96-.54-1.31-1.71-1.12-3.38-2.3-5.07-3.45-.59-.4-.8-.17-.85.48-.05.64-.17,1.27-.29,1.9-.79,4.16-2.35,8.02-4.43,11.21Zm-119.27-23.25c.48-.44.58-.95.75-1.42.48-1.32.87-2.68,1.42-3.97,1.61-3.83,3.61-7.45,6.08-10.8.25-.34.41-.62.16-1.03-1.26-2.04-2.5-4.08-3.75-6.12-.3-.49-.5-.54-.9-.01-3.05,3.99-5.62,8.26-7.45,12.94-.4,1.02-1.36,2.14-.81,3.25,1.25,2.51,2.83,4.84,4.49,7.16Zm83.13-48.09c-1.61-1.73-3.08-3.26-4.49-4.85-.38-.43-.76-.29-1.15-.24-3.51.48-7.02.93-10.52,1.48-2.12.33-4.22.81-6.45,1.25,1.82,2.39,3.7,4.48,5.55,6.6.29.34.56.45,1,.26,5.09-2.2,10.45-3.47,16.07-4.5Zm38.98,53.42c.1-.36.16-.48.16-.6.14-5.32-.04-10.63-.29-15.95-.01-.3.02-.64-.22-.84-1.68-1.4-3.37-2.77-5.21-4.28-.58,5.44-1.04,10.61-2.33,15.65-.07.27-.14.6.18.81,2.54,1.71,5.07,3.42,7.72,5.21Zm-86.17-60c.4.1.73-.15,1.07-.27,4.8-1.65,9.47-3.79,14.66-3.95.69-.02.65-.31.39-.8-.9-1.7-1.8-3.4-2.65-5.12-.28-.57-.62-.67-1.21-.58-5.19.79-9.92,2.81-14.51,5.26-.51.27-.56.52-.3.98.76,1.34,1.49,2.69,2.23,4.03.08.15.19.28.3.43Zm1.12,1.93c1.28,1.95,2.51,3.75,3.64,5.6.42.69.72.84,1.46.41,3.05-1.78,6.33-2.98,9.74-3.89,1.62-.43,3.25-.83,4.9-1.25-.96-1.52-1.89-2.9-2.72-4.34-.36-.62-.76-.71-1.42-.69-5.47.13-10.37,2.33-15.58,4.15Zm-32.59,24.6c.16-.11.24-.14.29-.2,3.78-4.88,7.61-9.71,11.95-14.12.24-.24.32-.45.17-.79-.58-1.31-1.14-2.62-1.71-3.96-4.69,3.96-9.02,8.23-12.97,12.87-.41.48-.59.91-.19,1.58.87,1.46,1.61,3,2.46,4.62Zm119.66,17.96c.21,5.7.39,11.09.18,16.49-.01.26-.02.47.25.65,1.98,1.3,3.94,2.62,5.96,3.96.5-3.54-.1-13.36-.97-16.27-.06-.2-.12-.44-.27-.56-1.64-1.38-3.3-2.75-5.15-4.27Zm-72.83-55.49c1.14,1.8,1.73,3.63,2.81,5.23.44.66.52,1.3,1.57,1.17,5.08-.63,10.19-.9,15.32-1.02.26,0,.6.13.8-.24-.45-.61-.95-1.2-1.34-1.85-.58-.96-1.28-1.61-2.47-1.78-2.02-.29-4-.83-6.03-1.08-3.46-.43-6.93-.75-10.65-.43Zm-57.47,55.88c2.07-6.01,5.31-11.01,8.95-15.78.25-.33.37-.63.15-1.05-.92-1.67-1.81-3.36-2.75-5.11-4.09,5.39-6.44,11.45-8.16,17.79-.11.4-.18.81.09,1.23.55.85,1.03,1.74,1.72,2.92Zm24.84-34.69c1.25-1.04,2.43-2.07,3.66-3.02,3.24-2.49,6.86-4.32,10.62-5.87.68-.28,1.11-.46.53-1.31-.69-1.02-1.24-2.14-1.79-3.25-.32-.65-.6-.73-1.25-.34-4.51,2.7-8.76,5.77-12.87,9.05-.3.24-.62.42-.45.93.45,1.28.83,2.59,1.54,3.82Zm63.76,119.82c-2.17-1.03-4.07-1.88-5.93-2.83-.69-.35-1.23-.32-1.91-.01-4.16,1.85-8.51,3.06-12.98,3.87-2.42.44-4.85.65-7.6.74,1.61,1.03,3,1.53,4.64,1.63,8.05.5,15.79-1.03,23.79-3.4Zm-5.94-130.53c-.65-.72-1.2-1.2-1.61-1.79-.67-.98-1.51-1.25-2.68-1.22-3.96.12-7.91.28-11.86.6-1.45.12-2.89.26-4.5.4,1.04,1.55,1.97,2.93,2.87,4.32.27.41.54.58,1.05.46,5.45-1.25,10.97-2.11,16.73-2.77Zm23.08,21.06c.48.38.65.14.86-.1,2.32-2.54,4.66-5.07,6.97-7.62.15-.17.58-.35.22-.71-.72-.72-1.34-1.59-2.19-2.1-.56-.34-1.2.45-1.83.66-.04.01-.08.04-.12.05-2.71,1.36-5.4,2.75-8.13,4.07-.89.43-.86.77-.19,1.38.75.68,1.44,1.44,2.16,2.16.78.78,1.58,1.55,2.24,2.2Zm-12.29-12.61c1.81,1.89,3.42,3.51,4.96,5.21.53.58.9.5,1.51.18,2.8-1.46,5.63-2.87,8.46-4.29,1.55-.78,1.58-.79.29-1.91-.61-.53-1-1.47-2.05-1.3-4.29.68-8.58,1.37-13.16,2.1Zm-68.69,111.1c-.02.11-.03.21-.05.32,1.66,1.18,3.34,2.33,4.96,3.56,2.6,1.98,5.35,2.81,8.56,1.57,1.1-.43,2.34-.51,3.7-.79-1.57-1.19-3.07-2.07-4.25-3.27-1.91-1.95-4.06-2.18-6.59-1.77-2.08.33-4.22.28-6.33.39Zm89.02-92.17c1.39-3.39,2.52-6.15,3.63-8.91.2-.48.71-.98.25-1.53-.65-.78-1.34-1.53-2.07-2.24-.22-.22-.44.14-.61.31-2.23,2.4-4.45,4.8-6.67,7.21-.45.49-.46.91.09,1.39,1.31,1.15,2.56,2.37,3.85,3.54,1.15,1.05,1.16,1.04,1.53.23Zm-26.66-25.73c1.49,1.6,2.85,3.06,4.2,4.52.29.31.59.42,1.01.35,4.11-.69,8.21-1.37,12.45-2.07-1.03-1.09-2.19-1.79-3.34-2.49-.6-.37-1.05-.96-1.89-.95-4.08.05-8.16.13-12.43.63Zm-79.42,102.14c.5-2.92.96-5.62,1.44-8.32.06-.34-.02-.59-.23-.82-2.1-2.27-4.06-4.65-6.14-7.26-.27,2.66-.53,5.1-.77,7.53-.02.2,0,.44.1.61,1.57,2.86,3.32,5.61,5.59,8.26Zm111.77-84.66c-1.38,3.32-2.74,6.59-4.1,9.85-.15.36-.31.66.11,1.01,1.78,1.48,3.53,3.01,5.46,4.66.24-3.32.27-6.43.75-9.46.4-2.49-.26-4.37-2.06-5.97-.03-.03-.08-.04-.16-.08Zm8.51,21.29c-.19-3.71-.36-7.15-.55-10.58-.02-.29-.09-.61-.24-.84-.99-1.52-2.01-3.01-3.24-4.44-.09.2-.18.3-.19.41-.27,3.56-.53,7.12-.81,10.67-.04.5.16.82.5,1.09,1.44,1.18,2.89,2.35,4.53,3.68Zm-95.46,76.49c-2.41-2.1-4.74-4.11-7.05-6.15-.39-.35-.6-.14-.85.08-1.57,1.42-3.14,2.85-4.71,4.27-.19.17-.51.38-.22.59.83.61,1.38,1.81,2.54,1.75,3.39-.18,6.79-.11,10.29-.54Zm-13.7-12.22c-.89,2.45-1.71,4.77-2.59,7.07-.48,1.27.74,1.46,1.26,2.05.59.66.86-.19,1.16-.46,1.45-1.24,2.84-2.56,4.28-3.81.44-.38.55-.59.03-1.04-1.38-1.19-2.69-2.46-4.15-3.81Zm-18.52-13.78c.2-1.98.65-3.98.51-5.93-.08-1.11-1.12-2.15-1.72-3.23-.08-.15-.15-.31-.23-.46-1.01-1.92-1.75-3.96-2.57-6.04-.48.66-.54,1.26-.39,1.92.21.92.35,1.85.55,2.76.85,3.79,1.95,7.5,3.84,10.98Zm-5.2-25.3c.11,0,.22.02.33.02.05-.24.11-.48.15-.72.8-4.86,1.5-9.76,2.9-14.48.63-2.11.23-3.6-1.19-5.24-1.33,6.85-1.99,13.61-2.2,20.42Zm41.95,61.77c4.46,2.12,8.98,1.57,13.34,2.18-1.25-.92-2.55-1.7-3.86-2.45-.7-.4-1.3-1.26-2.09-1.14-2.38.35-4.73.89-7.38,1.41Zm45.72-130.44c.84.92,1.46,1.62,2.09,2.3.23.25.44.47.85.42,3.36-.41,6.73-.62,10.12-.86-4.07-2.09-8.53-1.13-13.06-1.86Zm-3.68-4.7c.68,1.04,1.05,2.43,2.19,2.62,1.78.3,3.64.18,5.46.24.02-.11.04-.21.07-.32-2.57-.85-5.15-1.7-7.72-2.55Zm-22.27,140.76c-1.22-.93-2.23-1.04-3.34-.68,1,.2,2,.41,3.34.68Z" style="fill: #101010;"/>
  <path d="m133.79,122.73c1.03-1.18,2.27-2.63,3.54-4.06,2.82-3.18,5.67-6.34,8.47-9.54.55-.63.84-.83,1.53-.1,4.23,4.43,8.53,8.79,12.97,13,.55.52.56.84.04,1.39-4.17,4.36-8.32,8.74-12.45,13.14-.53.56-.81.56-1.39.02-4.35-4-8.52-8.19-12.55-12.52-.26-.28-.76-.52-.17-1.33Z" style="fill: #c0c3c5;"/>
  <path d="m149.06,138.31c.1-.1.24-.25.39-.41,4.12-4.36,8.24-8.71,12.35-13.07.48-.52.76-.67,1.39-.07,4.31,4.05,8.75,7.96,13.44,11.57.58.44.56.72.1,1.28-3.68,4.58-7.61,8.93-11.89,12.97-.65.61-1.1.55-1.71.05-4.62-3.69-9.2-7.43-13.61-11.37-.23-.2-.79-.33-.46-.94Z" style="fill: #999da8;"/>
  <path d="m162.16,120.93c-.23-.21-.46-.41-.67-.62-4.34-4.2-8.6-8.48-12.79-12.83-.5-.51-.65-.78-.06-1.4,3.64-3.81,7.42-7.49,11.3-11.06.54-.49.87-.55,1.42.04,3.93,4.24,8,8.35,12.17,12.36.54.51.64.79.07,1.4-3.55,3.84-7.04,7.73-10.56,11.59-.23.25-.36.75-.87.51Z" style="fill: #aeabb0;"/>
  <path d="m147.69,140.48c1.97,1.7,3.92,3.42,5.91,5.08,2.72,2.26,5.46,4.49,8.23,6.68.52.41.53.58.05.99-4.34,3.77-8.81,7.39-13.48,10.74-.46.33-.71.35-1.18-.03-4.22-3.45-8.32-7.03-12.4-10.65-.59-.52-.42-.73.03-1.15,4.04-3.71,7.97-7.55,11.84-11.44.28-.28.52-.8.98-.23Z" style="fill: #aeabb0;"/>
  <path d="m121.34,139.49c3.01-4.89,6.46-9.49,10.12-13.94.46-.55.64-.42,1.04,0,4.07,4.35,8.26,8.59,12.68,12.59.48.44.44.69.03,1.1-3.94,3.94-7.94,7.83-12.02,11.62-.41.38-.62.34-1.03-.03-3.65-3.33-7.21-6.75-10.67-10.27-.3-.31-.64-.63-.16-1.09Z" style="fill: #aeabb0;"/>
  <path d="m177.48,161.18c-2.05-1.46-4.32-3.04-6.56-4.67-1.52-1.1-2.97-2.29-4.49-3.37-.56-.4-.67-.59-.11-1.11,4.38-4.05,8.37-8.46,12.05-13.16.49-.63.88-.59,1.46-.16,4.06,2.98,8.31,5.67,12.65,8.22.51.3.9.46.35,1.21-3.9,5.28-8.91,9.33-14.2,13.08-.43.3-.45.27-1.14-.05Z" style="fill: #dddcdb;"/>
  <path d="m178.06,134.85c-2.58-2.16-5.19-4.29-7.74-6.49-1.94-1.67-3.79-3.44-5.7-5.14-.52-.46-.57-.77-.08-1.3,3.52-3.83,7.03-7.68,10.5-11.55.54-.61.84-.61,1.42-.06,3.76,3.53,7.59,6.99,11.66,10.17.53.42.62.8.21,1.4-2.91,4.2-5.89,8.36-9.02,12.4-.23.3-.42,1.24-1.25.59Z" style="fill: #616161;"/>
  <path d="m121.46,109.04c1.64-2.15,3.37-4.15,5.22-6.03,2.36-2.39,4.82-4.68,7.21-7.04.53-.52.82-.59,1.38.04,2.98,3.33,6,6.62,9.06,9.88.6.64.73.97.06,1.72-3.99,4.43-7.91,8.91-11.82,13.4-.54.62-.81.77-1.42.06-3.1-3.62-6.26-7.19-9.4-10.77-.33-.38-.78-.75-.29-1.26Z" style="fill: #c0c3c5;"/>
  <path d="m110.57,95.21c1.52-1.72,2.98-3.5,4.58-5.14,2.61-2.68,5.33-5.25,7.99-7.89.56-.56.86-.71,1.41.09,2.53,3.69,5.26,7.23,8.1,10.68.52.63.51.94-.1,1.49-4.39,3.97-8.63,8.08-12.27,12.76-.43.56-.69.51-1.14-.04-2.83-3.52-5.73-6.97-8.29-10.69-.26-.38-.68-.72-.28-1.27Z" style="fill: #aeabb0;"/>
  <path d="m186.54,93.9c-3.38,3.9-6.55,7.57-9.73,11.24-1.24,1.42-1.28,1.44-2.55.15-3.8-3.84-7.56-7.71-11.36-11.55-.51-.51-.62-.78.04-1.33,3.86-3.24,7.96-6.13,12.22-8.83.57-.36.89-.35,1.37.14,3.16,3.16,6.36,6.27,9.52,9.42.22.22.9.46.5.77Z" style="fill: #c0c3c5;"/>
  <path d="m202.21,133.02c-2.35,4.34-4.62,8.29-7.16,12.09-.44.66-.77.46-1.24.19-3.39-1.98-6.7-4.09-9.94-6.29-.99-.67-1.93-1.41-2.93-2.04-.53-.33-.63-.57-.22-1.07,3.33-4.21,6.45-8.57,9.45-13.02.39-.57.66-.38,1-.12,3.71,2.79,7.56,5.39,11.45,7.93.42.28.49.51.27.93-.29.57-.55,1.16-.67,1.41Z" style="fill: #c0c3c5;"/>
  <path d="m180.01,162.85c3.23-2.37,6.33-4.69,9.12-7.38,1.87-1.8,3.62-3.72,5.15-5.83.61-.84,1.01-1.08,2.06-.43,3.05,1.89,6.21,3.6,9.35,5.32.67.37.86.59.36,1.3-3.64,5.09-8.13,9.37-12.77,13.52-.48.43-.86.38-1.37.13-4.03-1.96-8.01-4.03-11.91-6.64Z" style="fill: #999da8;"/>
  <path d="m145.93,165.66c-5.25,3.5-10.49,6.85-16.82,7.9-.47.08-.85.13-1.28-.25-2.52-2.21-5.08-4.39-7.66-6.55-.54-.45-.56-.69-.03-1.17,4.01-3.61,8.01-7.23,11.99-10.88.43-.4.65-.46,1.13-.04,4.07,3.55,8.16,7.06,12.25,10.59.12.1.23.22.43.4Z" style="fill: #dddcdb;"/>
  <path d="m125.63,79.92c.19-.18.34-.34.5-.48,3.97-3.55,8.04-6.99,12.53-9.9.72-.47,1.04-.52,1.55.29,2.19,3.51,4.62,6.86,7.29,10.02.46.55.48.81-.07,1.3-3.96,3.49-7.9,7-11.83,10.54-.58.52-.89.5-1.39-.12-2.84-3.51-5.57-7.12-8.18-10.81-.18-.26-.5-.49-.4-.85Z" style="fill: #999da8;"/>
  <path d="m114.16,121.44c1.63-3.5,3.27-6.49,5.15-9.36.51-.77.73-.61,1.23-.02,3.09,3.57,6.2,7.13,9.34,10.66.49.55.54.87.05,1.44-3.2,3.83-6.2,7.81-8.96,11.97-.09.14-.2.27-.3.42-1.19,1.9-1.22,1.93-2.75.18-2.1-2.4-4.15-4.85-6.23-7.27-.41-.48-.63-.91-.32-1.59,1.05-2.25,1.79-4.63,2.77-6.43Z" style="fill: #c0c3c5;"/>
  <path d="m109.6,126.87c-2.91-3.89-5.68-7.61-8.47-11.31-.39-.51-.37-.99-.19-1.55,1.74-5.62,4.07-10.97,7.44-15.82.48-.7.68-.66,1.12-.03,2.59,3.7,5.46,7.18,8.34,10.65.45.54.56.95.15,1.56-3.48,5.07-6.05,10.6-8.39,16.51Z" style="fill: #c0c3c5;"/>
  <path d="m136.39,93.76c.23-.21.41-.39.6-.56,3.85-3.42,7.71-6.83,11.53-10.28.67-.61,1.03-.69,1.69.05,2.74,3.09,5.53,6.12,8.34,9.14.55.59.63.88-.03,1.46-3.91,3.42-7.58,7.09-11.14,10.86-.62.65-.93.72-1.57.02-2.93-3.25-5.93-6.45-8.88-9.68-.25-.27-.74-.51-.53-1Z" style="fill: #999da8;"/>
  <path d="m176.22,162.96c-5,3.66-9.73,7.65-15.16,10.65-.51.28-.87.19-1.28-.1-3.51-2.4-6.86-5.02-10.25-7.76,3.46-2.51,6.78-5.05,9.96-7.74,1.33-1.13,2.67-2.25,3.98-3.4.42-.37.7-.56,1.27-.13,3.77,2.83,7.59,5.61,11.48,8.47Z" style="fill: #dddcdb;"/>
  <path d="m199.2,104.69c3.61,2.76,7.2,5.49,10.96,8,.62.41.39.87.26,1.34-.83,3.06-2.03,5.99-3.27,8.89-.79,1.84-1.72,3.63-2.57,5.45-.3.64-.61.79-1.25.36-3.72-2.56-7.49-5.05-11.11-7.76-.4-.3-.61-.51-.33-1.03,2.68-4.92,4.38-10.31,7.32-15.25Z" style="fill: #aeabb0;"/>
  <path d="m162.41,175.25c5.5-3.08,10.18-7.06,15.13-10.64.4-.29.71-.36,1.14-.08,3.86,2.53,7.94,4.68,12.2,6.82-2.35,2.06-4.74,3.81-7.17,5.5-2.6,1.8-5.31,3.41-8.14,4.82-.42.21-.8.48-1.31.22-3.99-2.02-7.93-4.13-11.85-6.63Z" style="fill: #c0c3c5;"/>
  <path d="m193.59,111.35c-1.06,2.25-1.99,4.73-3.22,7.08-.38.73-.66.65-1.18.23-3.98-3.26-7.84-6.65-11.58-10.18-.35-.33-.49-.52-.08-.99,3.43-3.94,6.83-7.92,10.22-11.89.33-.39.5-.41.9-.04,2.72,2.5,5.45,5,8.33,7.31.5.4.35.74.14,1.19-1.1,2.41-2.55,4.64-3.52,7.29Z" style="fill: #c0c3c5;"/>
  <path d="m151.31,80.63c.16-.13.35-.3.55-.45,3.87-3.1,8.01-5.77,12.34-8.19.68-.38,1.01-.22,1.49.3,2.65,2.88,5.31,5.74,8.02,8.56.56.59.6.82-.12,1.27-4.23,2.64-8.3,5.5-12.06,8.8-.52.45-.82.48-1.32-.08-2.81-3.13-5.69-6.21-8.52-9.32-.19-.21-.63-.39-.38-.88Z" style="fill: #dddcdb;"/>
  <path d="m100.04,117.64c2.05,2.74,3.95,5.31,5.87,7.86.72.96,1.44,1.91,2.22,2.82.48.56.52,1.09.25,1.76-2.3,5.87-4.28,11.85-5.56,18.03-.08.37-.04.88-.47.94-.23.03-.56-.34-.77-.6-1.63-1.98-3.23-3.97-4.85-5.96-.57-.7-.74-1.44-.63-2.37.83-7.28,1.73-14.55,3.62-21.65.05-.2.14-.39.32-.85Z" style="fill: #616161;"/>
  <path d="m195,170.62c3.54-3.16,7.06-6.49,10.15-10.24,1-1.21,1.95-2.48,2.85-3.77.33-.47.56-.51,1.02-.25,2.88,1.6,5.76,3.19,8.66,4.74.51.28.57.52.25.97-3.37,4.72-6.95,9.25-11.38,13.04-.34.29-.63.68-1.21.4-3.42-1.64-6.86-3.26-10.34-4.9Z" style="fill: #c0c3c5;"/>
  <path d="m117.66,146.5c.6-1.28,1.23-2.54,1.8-3.83.27-.61.55-.67,1-.19,3.25,3.43,6.72,6.63,10.19,9.83.73.67.02.86-.29,1.14-3.26,3-6.51,5.99-9.81,8.94-.87.78-1.66,2.2-2.7,2.1-.92-.09-1.74-1.37-2.59-2.12-.13-.11-.23-.25-.35-.37-2.66-2.48-2.63-2.47-1.28-5.79,1.32-3.24,2.46-6.56,4.03-9.7Z" style="fill: #999da8;"/>
  <path d="m206.75,152.74c-3.14-1.78-6.26-3.56-9.4-5.3-.73-.41-.96-.77-.41-1.55,2.78-3.96,5.18-8.15,7.31-12.49.51-1.03.93-1.05,1.79-.5,2.55,1.64,5.13,3.23,7.7,4.85.43.27.9.52.57,1.2-2.15,4.47-3.67,9.22-6.21,13.52-.45.75-.8.72-1.35.28Z" style="fill: #c0c3c5;"/>
  <path d="m141.64,67.77c.26-.15.56-.33.85-.49,4.31-2.4,9.02-3.64,13.79-4.68.58-.13,1.04-.07,1.47.46,1.7,2.09,3.41,4.16,5.18,6.19.56.64.35.85-.25,1.18-4.36,2.39-8.49,5.11-12.35,8.25-.5.4-.77.42-1.2-.11-2.55-3.16-4.99-6.4-7.15-9.85-.17-.27-.5-.49-.34-.95Z" style="fill: #616161;"/>
  <path d="m110.74,158.12c-2.09-2.13-4.05-4.13-6.01-6.13-.33-.33-.38-.67-.29-1.15.84-4.4,1.91-8.73,3.38-12.97.78-2.25,1.58-4.5,2.4-6.84,2.21,2.54,4.33,5.01,6.49,7.45,1.62,1.83,1.65,1.82.53,4.05-2.5,4.96-4.56,10.11-6.5,15.59Z" style="fill: #aeabb0;"/>
  <path d="m213.24,146.1c.89-1.89,1.84-3.76,2.66-5.69.38-.88.74-.91,1.48-.44,2.71,1.71,5.44,3.38,8.18,5.05.67.41.86.8.57,1.65-1.48,4.42-3.75,8.42-6.17,12.36-.35.57-.66.65-1.23.33-2.84-1.59-5.68-3.16-8.54-4.7-.71-.38-.59-.77-.24-1.32,1.42-2.25,2.39-4.73,3.28-7.24Z" style="fill: #c0c3c5;"/>
  <path d="m172.18,183.13c-2.72,1.26-5.37,2.05-8.05,2.72-3.82.95-7.69,1.43-11.64,1.54-2.54.07-4.76-.55-6.88-1.88-1.63-1.02-3.3-1.96-5.06-3,.68-.41,1.41-.44,2.08-.59,5.79-1.33,11.58-2.65,16.99-5.23.3-.14.59-.36.95-.13,3.69,2.36,7.49,4.53,11.6,6.57Z" style="fill: #aeabb0;"/>
  <path d="m208.15,125.71c1.68-3.39,2.99-6.67,3.97-10.08.23-.8.57-1.07,1.35-.55,2.39,1.63,4.79,3.24,7.2,4.84.59.39.34.92.3,1.39-.34,3.56-1.28,6.94-2.95,10.12-.66,1.25-1.25,2.53-1.89,3.78-.38.75-.86,1.06-1.71.51-2.58-1.66-5.19-3.26-7.79-4.89-.52-.33-.59-.74-.31-1.3.67-1.34,1.29-2.7,1.83-3.83Z" style="fill: #616161;"/>
  <path d="m130.45,175.45c6.37-1.33,11.41-4.56,16.41-7.85.47-.31.85-.52,1.37-.12,3.23,2.5,6.46,5,9.76,7.55-2.48,1.41-5.19,2.13-7.88,2.88-3.37.93-6.79,1.69-10.21,2.45-1.33.3-2.4.37-3.54-.56-1.8-1.47-3.74-2.77-5.9-4.34Z" style="fill: #616161;"/>
  <path d="m166.94,70.64c4.15-1.8,8.24-2.85,12.38-3.72,1.46-.31,3.04-.98,4.37-.68,1.35.31,2.11,1.98,3.16,3.02.87.87,1.69,1.79,2.58,2.65.48.47.39.67-.16.99-4.14,2.38-8.27,4.79-12.4,7.18-.3.18-.56.51-.98.06-2.92-3.13-5.88-6.24-8.95-9.5Z" style="fill: #c0c3c5;"/>
  <path d="m177.91,81.91c.21-.14.42-.28.64-.41,4.06-2.35,8.12-4.69,12.17-7.06.5-.29.84-.35,1.29.13,1.64,1.72,3.33,3.4,5.03,5.06.46.45.49.68.04,1.22-2.85,3.44-5.64,6.92-8.43,10.4-.45.56-.73.85-1.44.16-2.99-2.9-5.97-5.8-8.87-8.78-.2-.2-.49-.34-.43-.71Z" style="fill: #c0c3c5;"/>
  <path d="m108.98,93.68c-1.46-2.19-2.77-4.48-4.06-6.78-.18-.31-.23-.57.03-.92,3.79-5.03,7.72-9.95,12.16-14.5,1.76,2.59,3.48,5.12,5.22,7.64.29.42.31.74-.08,1.1-4.58,4.2-8.98,8.58-12.99,13.33-.05.06-.15.08-.28.14Z" style="fill: #aeabb0;"/>
  <path d="m177.25,183.23c2.48-1.41,4.82-2.71,7.04-4.22,2.69-1.83,5.28-3.78,7.77-5.87.63-.53,1.13-.65,1.93-.28,2.9,1.36,5.84,2.63,8.79,3.9.91.39.91.68.11,1.22-5.61,3.79-11.75,6.44-18.12,8.62-.29.1-.57.16-.87.02-2.17-1.09-4.45-1.97-6.65-3.39Z" style="fill: #616161;"/>
  <path d="m119.13,69.51c.51-.44,1.12-.97,1.72-1.51,3.66-3.27,7.95-5.45,12.44-7.28.47-.19.81-.3,1.17.28,1.14,1.86,2.34,3.68,3.55,5.49.34.51.3.78-.23,1.11-4.58,2.88-8.7,6.34-12.71,9.94-.62.55-.93.55-1.37-.12-1.44-2.18-2.91-4.33-4.35-6.5-.25-.38-.61-.75-.22-1.4Z" style="fill: #616161;"/>
  <path d="m201.73,99.62c1.73-3.19,3.39-6.43,4.89-9.74.34-.75.64-.87,1.3-.3,1.63,1.44,3.3,2.83,4.98,4.22.43.36.67.74.61,1.31-.53,4.96-.92,9.94-2.04,14.82-.17.74-.2.97-.97.43-3.15-2.19-6.2-4.51-9.28-6.79-.78-.58-.99-1.13-.42-1.99.4-.6.64-1.3.95-1.96Z" style="fill: #616161;"/>
  <path d="m201.86,94.22c-1,2.12-2.02,4.24-3.01,6.38-.29.63-.57.72-1.1.25-2.58-2.29-5.16-4.56-7.76-6.83-.48-.42-.35-.74,0-1.18,2.84-3.45,5.67-6.91,8.46-10.4.48-.6.76-.74,1.36-.16,1.59,1.54,3.21,3.04,4.88,4.5.53.46.58.83.29,1.42-.99,2.04-1.94,4.09-2.91,6.14l-.22-.11Z" style="fill: #999da8;"/>
  <path d="m218.27,135.6c2.09-3.19,3.64-7.05,4.43-11.21.12-.63.24-1.26.29-1.9.05-.65.26-.89.85-.48,1.69,1.15,3.36,2.34,5.07,3.45.54.35.58.79.54,1.31-.46,5.14-1.03,10.27-2.1,15.34-.27,1.29-.49,1.34-1.63.61-2.26-1.45-4.53-2.88-6.82-4.28-1.55-.95-1.56-.91-.63-2.84Z" style="fill: #616161;"/>
  <path d="m99.01,112.34c-1.66-2.32-3.24-4.65-4.49-7.16-.55-1.1.41-2.22.81-3.25,1.82-4.68,4.4-8.95,7.45-12.94.4-.53.6-.48.9.01,1.25,2.04,2.49,4.09,3.75,6.12.25.41.09.68-.16,1.03-2.47,3.35-4.47,6.97-6.08,10.8-.55,1.29-.94,2.65-1.42,3.97-.17.47-.27.98-.75,1.42Z" style="fill: #616161;"/>
  <path d="m93.57,108.04c1.51,2.27,3.02,4.53,4.53,6.8.23.34.27.71.15,1.1-2.08,7.05-3.18,14.28-3.97,21.57-.02.2-.11.39-.23.8-1.31-2.23-2.11-4.47-2.93-6.69-.43-1.16-.83-2.34-1.3-3.48-.11-.26-.14-.45-.1-.71,1.03-6.47,1.94-12.97,3.63-19.32.08-.02.15-.05.22-.08Z" style="fill: #999da8;"/>
  <path d="m182.14,64.25c-5.62,1.03-10.98,2.3-16.07,4.5-.43.19-.7.07-1-.26-1.85-2.11-3.73-4.2-5.55-6.6,2.23-.44,4.33-.92,6.45-1.25,3.5-.54,7.01-1,10.52-1.48.4-.05.77-.19,1.15.24,1.41,1.59,2.88,3.12,4.49,4.85Z" style="fill: #999da8;"/>
  <path d="m221.12,117.68c-2.65-1.79-5.18-3.5-7.72-5.21-.32-.22-.25-.54-.18-.81,1.29-5.04,1.75-10.21,2.33-15.65,1.84,1.51,3.53,2.89,5.21,4.28.24.2.21.53.22.84.25,5.31.43,10.63.29,15.95,0,.12-.06.24-.16.6Z" style="fill: #999da8;"/>
  <path d="m134.95,57.68c-.11-.15-.22-.28-.3-.43-.75-1.34-1.47-2.7-2.23-4.03-.27-.47-.21-.71.3-.98,4.59-2.45,9.32-4.47,14.51-5.26.59-.09.93,0,1.21.58.85,1.72,1.75,3.42,2.65,5.12.26.49.3.78-.39.8-5.2.16-9.86,2.3-14.66,3.95-.34.12-.67.37-1.07.27Z" style="fill: #999da8;"/>
  <path d="m136.07,59.61c5.2-1.83,10.11-4.02,15.58-4.15.66-.02,1.07.07,1.42.69.83,1.44,1.76,2.82,2.72,4.34-1.64.42-3.27.82-4.9,1.25-3.4.9-6.69,2.11-9.74,3.89-.74.43-1.04.28-1.46-.41-1.13-1.85-2.36-3.65-3.64-5.6Z" style="fill: #999da8;"/>
  <path d="m103.48,84.21c-.85-1.62-1.59-3.16-2.46-4.62-.4-.67-.23-1.1.19-1.58,3.95-4.64,8.28-8.91,12.97-12.87.58,1.34,1.13,2.66,1.71,3.96.15.33.07.54-.17.79-4.34,4.4-8.17,9.24-11.95,14.12-.05.06-.13.09-.29.2Z" style="fill: #dddcdb;"/>
  <path d="m223.15,102.16c1.85,1.53,3.51,2.89,5.15,4.27.15.12.21.36.27.56.87,2.91,1.47,12.74.97,16.27-2.02-1.34-3.98-2.66-5.96-3.96-.27-.18-.26-.4-.25-.65.22-5.4.03-10.79-.18-16.49Z" style="fill: #999da8;"/>
  <path d="m150.31,46.67c3.72-.33,7.2,0,10.65.43,2.02.25,4.01.79,6.03,1.08,1.19.17,1.89.81,2.47,1.78.39.65.89,1.24,1.34,1.85-.2.38-.54.24-.8.24-5.12.12-10.23.4-15.32,1.02-1.06.13-1.13-.51-1.57-1.17-1.08-1.61-1.67-3.44-2.81-5.23Z" style="fill: #616161;"/>
  <path d="m92.85,102.55c-.69-1.17-1.17-2.06-1.72-2.92-.27-.42-.2-.83-.09-1.23,1.72-6.34,4.07-12.39,8.16-17.79.94,1.75,1.83,3.43,2.75,5.11.23.41.1.72-.15,1.05-3.64,4.77-6.88,9.77-8.95,15.78Z" style="fill: #c0c3c5;"/>
  <path d="m117.68,67.87c-.71-1.23-1.09-2.53-1.54-3.82-.18-.51.15-.69.45-.93,4.11-3.27,8.35-6.35,12.87-9.05.65-.39.93-.31,1.25.34.55,1.11,1.1,2.23,1.79,3.25.58.85.15,1.03-.53,1.31-3.76,1.55-7.38,3.38-10.62,5.87-1.24.95-2.41,1.98-3.66,3.02Z" style="fill: #dddcdb;"/>
  <path d="m181.44,187.69c-8,2.37-15.74,3.9-23.79,3.4-1.64-.1-3.02-.6-4.64-1.63,2.74-.09,5.18-.3,7.6-.74,4.48-.81,8.83-2.03,12.98-3.87.68-.3,1.22-.34,1.91.01,1.86.95,3.76,1.8,5.93,2.83Z" style="fill: #aeabb0;"/>
  <path d="m175.5,57.16c-5.76.67-11.28,1.53-16.73,2.77-.51.12-.78-.04-1.05-.46-.9-1.39-1.84-2.77-2.87-4.32,1.61-.14,3.05-.28,4.5-.4,3.95-.33,7.9-.48,11.86-.6,1.17-.04,2.02.24,2.68,1.22.4.59.95,1.08,1.61,1.79Z" style="fill: #dddcdb;"/>
  <path d="m198.58,78.22c-.67-.65-1.46-1.42-2.24-2.2-.72-.72-1.41-1.48-2.16-2.16-.66-.6-.7-.95.19-1.38,2.73-1.32,5.42-2.71,8.13-4.07.04-.02.08-.04.12-.05.63-.21,1.27-1.01,1.83-.66.84.51,1.47,1.38,2.19,2.1.36.37-.07.54-.22.71-2.31,2.55-4.65,5.08-6.97,7.62-.21.24-.38.48-.86.1Z" style="fill: #aeabb0;"/>
  <path d="m186.29,65.61c4.57-.73,8.86-1.42,13.16-2.1,1.05-.17,1.44.77,2.05,1.3,1.29,1.11,1.26,1.13-.29,1.91-2.83,1.42-5.66,2.83-8.46,4.29-.61.32-.98.4-1.51-.18-1.53-1.7-3.15-3.32-4.96-5.21Z" style="fill: #dddcdb;"/>
  <path d="m117.6,176.71c2.11-.12,4.25-.06,6.33-.39,2.53-.41,4.69-.18,6.59,1.77,1.18,1.2,2.68,2.09,4.25,3.27-1.37.28-2.6.37-3.7.79-3.21,1.24-5.96.41-8.56-1.57-1.62-1.23-3.3-2.38-4.96-3.56.02-.11.03-.21.05-.32Z" style="fill: #616161;"/>
  <path d="m206.62,84.54c-.37.8-.38.81-1.53-.23-1.29-1.17-2.54-2.39-3.85-3.54-.55-.48-.54-.9-.09-1.39,2.22-2.4,4.45-4.81,6.67-7.21.16-.17.38-.53.61-.31.73.71,1.42,1.46,2.07,2.24.46.55-.05,1.05-.25,1.53-1.11,2.76-2.25,5.52-3.63,8.91Z" style="fill: #616161;"/>
  <path d="m179.96,58.81c4.27-.5,8.35-.58,12.43-.63.84-.01,1.29.58,1.89.95,1.15.7,2.31,1.4,3.34,2.49-4.23.7-8.34,1.37-12.45,2.07-.43.07-.73-.04-1.01-.35-1.35-1.47-2.71-2.92-4.2-4.52Z" style="fill: #dddcdb;"/>
  <path d="m100.54,160.95c-2.27-2.65-4.01-5.4-5.59-8.26-.09-.17-.12-.41-.1-.61.24-2.43.5-4.87.77-7.53,2.08,2.61,4.04,4.99,6.14,7.26.21.22.29.48.23.82-.48,2.7-.94,5.41-1.44,8.32Z" style="fill: #999da8;"/>
  <path d="m212.31,76.29c.08.04.13.05.16.08,1.81,1.6,2.46,3.48,2.06,5.97-.48,3.03-.51,6.14-.75,9.46-1.92-1.65-3.67-3.17-5.46-4.66-.42-.35-.26-.65-.11-1.01,1.36-3.27,2.72-6.54,4.1-9.85Z" style="fill: #dddcdb;"/>
  <path d="m104,154.46c1.99,1.68,3.69,3.65,5.57,5.44.29.27.34.52.2.9-.75,2.12-1.48,4.26-2.21,6.39-.23.69-.5.79-1.03.22-1.22-1.3-2.49-2.57-3.74-3.84-.25-.26-.44-.55-.36-.91.56-2.71.76-5.48,1.47-8.16l.1-.04Z" style="fill: #616161;"/>
  <path d="m220.82,97.58c-1.65-1.34-3.09-2.5-4.53-3.68-.34-.28-.54-.6-.5-1.09.29-3.56.54-7.11.81-10.67,0-.11.1-.22.19-.41,1.23,1.43,2.25,2.92,3.24,4.44.15.23.22.56.24.84.19,3.44.36,6.87.55,10.58Z" style="fill: #aeabb0;"/>
  <path d="m125.36,174.07c-3.5.44-6.9.37-10.29.54-1.16.06-1.71-1.14-2.54-1.75-.29-.21.03-.42.22-.59,1.57-1.42,3.14-2.85,4.71-4.27.25-.23.46-.43.85-.08,2.3,2.05,4.64,4.06,7.05,6.15Z" style="fill: #dddcdb;"/>
  <path d="m111.66,161.85c1.46,1.35,2.77,2.62,4.15,3.81.53.45.41.66-.03,1.04-1.44,1.26-2.83,2.57-4.28,3.81-.31.26-.57,1.12-1.16.46-.52-.59-1.74-.79-1.26-2.05.87-2.3,1.69-4.63,2.59-7.07Z" style="fill: #999da8;"/>
  <path d="m93.14,148.07c-1.88-3.48-2.99-7.19-3.84-10.98-.21-.92-.35-1.85-.55-2.76-.15-.66-.09-1.26.39-1.92.82,2.08,1.55,4.12,2.57,6.04.08.15.14.31.23.46.6,1.07,1.64,2.12,1.72,3.23.14,1.96-.31,3.95-.51,5.93Z" style="fill: #999da8;"/>
  <path d="m87.94,122.77c.21-6.81.87-13.57,2.2-20.42,1.42,1.64,1.82,3.13,1.19,5.24-1.41,4.72-2.1,9.62-2.9,14.48-.04.24-.1.48-.15.72-.11,0-.22-.02-.33-.02Z" style="fill: #999da8;"/>
  <path d="m129.89,184.54c2.66-.52,5.01-1.07,7.38-1.41.8-.12,1.4.74,2.09,1.14,1.31.75,2.61,1.53,3.86,2.45-4.36-.61-8.88-.07-13.34-2.18Z" style="fill: #dddcdb;"/>
  <path d="m227.15,102.7c-1.35-1.1-3.17-1.95-3.92-3.36-.73-1.36-.38-3.31-.48-5-.07-1.13-.11-2.27-.17-3.53,1.4,1.65,4.26,8.67,4.84,11.77-.09.04-.18.08-.27.12Z" style="fill: #c0c3c5;"/>
  <path d="m175.61,54.1c4.53.73,8.99-.23,13.06,1.86-3.39.24-6.76.45-10.12.86-.41.05-.63-.17-.85-.42-.63-.69-1.25-1.38-2.09-2.3Z" style="fill: #dddcdb;"/>
  <path d="m171.93,49.4c2.57.85,5.15,1.7,7.72,2.55-.02.11-.04.21-.07.32-1.82-.06-3.68.06-5.46-.24-1.14-.19-1.52-1.58-2.19-2.62Z" style="fill: #aeabb0;"/>
  <path d="m149.66,190.16c-1.34-.27-2.34-.48-3.34-.68,1.1-.36,2.12-.25,3.34.68Z" style="fill: #aeabb0;"/>
  <path d="m103.89,154.49v-.18s.07.1.1.15c0,0-.1.04-.1.04Z" style="fill: #616161;"/>
  <path d="m227.41,102.58c.07.09.17.2.02.27-.06.03-.19-.1-.29-.16.09-.04.18-.08.27-.12Z" style="fill: #c0c3c5;"/>
  <path d="m93.34,108.12c.02-.09.05-.19.07-.28.05.07.1.14.15.21-.07.03-.15.05-.22.08Z" style="fill: #999da8;"/>
</svg>
`

const DiscoSVG = (props) => {
  return (
    <SvgXml xml={xml} width="520" height="190" />
  )
}

export default DiscoSVG