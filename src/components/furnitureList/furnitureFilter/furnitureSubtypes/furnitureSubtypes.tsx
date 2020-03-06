import * as React from 'react';
import { IFurnitureType } from '../../../../models/IFurnitureType';
import Form from 'react-bootstrap/Form';

export interface IFurnitureSubtypesProps {
  subtypes: IFurnitureType[];

  selectSybtypes: (subtypeId: string) => void;
}

export const FurnitureSubtypes = (props: IFurnitureSubtypesProps) => {
  return (
    <div>
      {props.subtypes.length
        ? props.subtypes.map((subtype) => (
            <Form.Check label={subtype.Title} id={subtype.Id.toString()} />
          ))
        : null}
    </div>
  );
};
