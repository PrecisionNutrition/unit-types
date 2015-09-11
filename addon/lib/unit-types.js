import Ember from 'ember';

const UnitType = Ember.Object.extend();
const Unit = Ember.Object.extend();

export default [
  UnitType.create({
    name: 'length',
    base: 'meters',
    preferenceKey: 'lengthUnits',
    units: [
      Unit.create({ name: 'meters', shortName: 'm', unit: math.unit('meter') }),
      Unit.create({ name: 'feet', shortName: 'ft', unit: math.unit('feet') })
    ]
  }),

  UnitType.create({
    name: 'small length',
    base: 'centimeters',
    preferenceKey: 'smallLengthUnits',
    units: [
      Unit.create({ name: 'centimeters', shortName: 'cm', unit: math.unit('centimeters') }),
      Unit.create({ name: 'inches', shortName: 'in', unit: math.unit('inches') })
    ]
  }),

  UnitType.create({
    name: 'weight',
    base: 'kilograms',
    preferenceKey: 'massUnits',
    units: [
      Unit.create({ name: 'pounds', shortName: 'lbs', unit: math.unit('lbs') }),
      Unit.create({ name: 'kilograms', shortName: 'kg', unit: math.unit('kg') })
    ]
  })
];
