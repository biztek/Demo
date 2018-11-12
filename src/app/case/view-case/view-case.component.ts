import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';


/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = JSON.stringify({
  Abstract: {
    Registry: {
      ID: 'abstract',
      'Activity History': 'abstract'      
    },
    Patient: {
      'Name and Address': 'abstract',
      'Demographics': 'abstract',
      'Payer': 'abstract',
      'Occupation': 'abstract'      
    },
    Case: {
      'Identification': 'abstract',
      Physicians: {
        'Physicians #1': 'abstract',
        'Physicians #2': 'abstract',
        'Physicians #3': 'abstract',
        'Physicians #4': 'abstract',
        'Physicians #5': 'abstract',
        'Physicians #6': 'abstract',
        'Physicians #7': 'abstract'
      },
      'Consultation': 'abstract'     
    },
    'PE/Scans': {
      'Text': 'abstract',
      'Secondary DX': 'abstract',
      'Global Clinical Guidelines': 'abstract',
      'Family History': 'abstract',
      'Patient History': 'abstract'         
    },
  },

  Laboratory: {
    Registry: {
      ID: 'laboratory',
      'Activity History': 'laboratory'      
    },
    Patient: {
      'Name and Address': 'laboratory',
      'Demographics': 'laboratory',
      'Payer': 'laboratory',
      'Occupation': 'laboratory'      
    },
    Case: {
      'Identification': 'laboratory',
      Physicians: {
        'Physicians #1': 'laboratory',
        'Physicians #2': 'laboratory',
        'Physicians #3': 'laboratory',
        'Physicians #4': 'laboratory',
        'Physicians #5': 'laboratory',
        'Physicians #6': 'laboratory',
        'Physicians #7': 'laboratory'
      },
      'Consultation': 'laboratory'     
    },
    'PE/Scans': {
      'Text': 'laboratory',
      'Secondary DX': 'laboratory',
      'Global Clinical Guidelines': 'laboratory',
      'Family History': 'laboratory',
      'Patient History': 'laboratory'         
    },
  },

  Pathology: {
    Registry: {
      ID: 'pathology',
      'Activity History': 'pathology'      
    },
    Patient: {
      'Name and Address': 'pathology',
      'Demographics': 'pathology',
      'Payer': 'pathology',
      'Occupation': 'pathology'      
    },
    Case: {
      'Identification': 'pathology',
      Physicians: {
        'Physicians #1': 'pathology',
        'Physicians #2': 'pathology',
        'Physicians #3': 'pathology',
        'Physicians #4': 'pathology',
        'Physicians #5': 'pathology',
        'Physicians #6': 'pathology',
        'Physicians #7': 'pathology'
      },
      'Consultation': 'pathology'     
    },
    'PE/Scans': {
      'Text': 'pathology',
      'Secondary DX': 'pathology',
      'Global Clinical Guidelines': 'pathology',
      'Family History': 'pathology',
      'Patient History': 'pathology'         
    },
  },

  Staging: {
    Registry: {
      ID: 'staging',
      'Activity History': 'staging'      
    },
    Patient: {
      'Name and Address': 'staging',
      'Demographics': 'staging',
      'Payer': 'staging',
      'Occupation': 'staging'      
    },
    Case: {
      'Identification': 'staging',
      Physicians: {
        'Physicians #1': 'staging',
        'Physicians #2': 'staging',
        'Physicians #3': 'staging',
        'Physicians #4': 'staging',
        'Physicians #5': 'staging',
        'Physicians #6': 'staging',
        'Physicians #7': 'staging'
      },
      'Consultation': 'staging'     
    },
    'PE/Scans': {
      'Text': 'staging',
      'Secondary DX': 'staging',
      'Global Clinical Guidelines': 'staging',
      'Family History': 'staging',
      'Patient History': 'staging'         
    },
  },

  treatment: {
    Registry: {
      ID: 'treatment',
      'Activity History': 'treatment'      
    },
    Patient: {
      'Name and Address': 'treatment',
      'Demographics': 'treatment',
      'Payer': 'treatment',
      'Occupation': 'treatment'      
    },
    Case: {
      'Identification': 'treatment',
      Physicians: {
        'Physicians #1': 'treatment',
        'Physicians #2': 'treatment',
        'Physicians #3': 'treatment',
        'Physicians #4': 'treatment',
        'Physicians #5': 'treatment',
        'Physicians #6': 'treatment',
        'Physicians #7': 'treatment'
      },
      'Consultation': 'treatment'     
    },
    'PE/Scans': {
      'Text': 'treatment',
      'Secondary DX': 'treatment',
      'Global Clinical Guidelines': 'treatment',
      'Family History': 'treatment',
      'Patient History': 'treatment'         
    },
  },

  'Follow-Up': {
    Registry: {
      ID: 'followup',
      'Activity History': 'followup'      
    },
    Patient: {
      'Name and Address': 'followup',
      'Demographics': 'followup',
      'Payer': 'followup',
      'Occupation': 'followup'      
    },
    Case: {
      'Identification': 'followup',
      Physicians: {
        'Physicians #1': 'followup',
        'Physicians #2': 'followup',
        'Physicians #3': 'followup',
        'Physicians #4': 'followup',
        'Physicians #5': 'followup',
        'Physicians #6': 'followup',
        'Physicians #7': 'followup'
      },
      'Consultation': 'followup'     
    },
    'PE/Scans': {
      'Text': 'followup',
      'Secondary DX': 'followup',
      'Global Clinical Guidelines': 'followup',
      'Family History': 'followup',
      'Patient History': 'followup'         
    },
  },


});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}


@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.scss'],
  providers: [FileDatabase],
  
})
export class ViewCaseComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;
  nodes = [
    {
      id: 1,
      name: 'Abstract',
      children: [
        { id: 2, name: 'Registry',
        children: [
          { id: 21, name: 'ID' },
          { id: 21, name: 'Activity History' },
        ]
       },
        { id: 3, name: 'Patient',
        children: [
          { id: 31, name: 'Name and Address' },
          { id: 32, name: 'Demographics' },
          { id: 33, name: 'Payer' },
          { id: 34, name: 'Ocupation' },
        ]
       },
        { id: 4, name: 'Case',
        children: [
          { id: 41, name: 'Identification' },
          { id: 42, name: 'Physicians',
          children: [
            { id: 421, name: 'Physicains #1' },
            { id: 422, name: 'Physicains #2' },
            { id: 423, name: 'Physicains #3' },
            { id: 424, name: 'Physicains #4' },
            { id: 425, name: 'Physicains #5' },
            { id: 426, name: 'Physicains #6' },
            { id: 427, name: 'Physicains #7' },
          ]
        },
          { id: 43, name: 'Consultation' },
        ]
      },
        { id: 5, name: 'PE/Scans',
        children: [
          { id: 51, name: 'Text' },
          { id: 52, name: 'Secondary DX' },
          { id: 53, name: 'Global Clinical Guidelines' },
          { id: 54, name: 'Family History' },
          { id: 55, name: 'Patient History' },
        ]
      },
        { id: 6, name: 'Laboratory',
        children: [
          { id: 61, name: 'Scopes/Labs' },
          { id: 62, name: 'CBC' },
          { id: 63, name: 'Tumor Makers' },
        ]
      },
        { id: 7, name: 'Pathology',
        children: [
          { id: 71, name: 'Cancer' },
          { id: 72, name: 'Reports',
          children: [
            { id: 721, name: 'Reports #1' },
          ]
        },
          { id: 73, name: 'Site' },
        ]
      },
        { id: 8, name: 'Staging',
        children: [
          { id: 81, name: 'Diagnostic Procedures' },
          { id: 82, name: 'Collaborative Stage' },
          { id: 83, name: 'Distant Metastasis',
          children: [
            { id: 721, name: 'Distant Metastasis #1' },
          ]
        },
          { id: 84, name: 'CS Derived' },
          { id: 85, name: 'Tumor Data' },
          { id: 86, name: 'Other' },
       ]
      },
      { id: 9, name: 'Treatment',
      children: [
        { id: 91, name: 'General' },
        { id: 92, name: 'Surgery' },
        { id: 93, name: 'Radiation' },
        { id: 94, name: 'Hormone' },
        { id: 95, name: 'Other RX' },
        { id: 96, name: 'Protocol' },

      ]
    },

        { id: 10, name: 'Follow-Up',
        children: [
          { id: 101, name: 'Patient Status' },
          { id: 102, name: 'Notes' },
          { id: 103, name: 'Contacts' },
          { id: 104, name: 'Resources' },
        ]
      },
        { id: 15, name: 'Remarks',
        children: [
          { id: 151, name: 'Text, Misc' },
          { id: 152, name: 'Regional Fields' },
          { id: 153, name: 'Text, Remarks' },
          { id: 154, name: 'User Fields' },
        ]
      },
        { id: 11, name: 'Administrative',
        children: [
          { id: 111, name: 'Encounters',
          children: [
            { id: 1111, name: 'Encounters #1' },
          ]
        },
          { id: 112, name: 'Summary' },
        ]
      },
        { id: 12, name: 'Indicators',
        children: [
          { id: 131, name: 'JCAHO' },
          { id: 131, name: 'Clinical' },
        ]
      },
        { id: 13, name: 'Overrides',
        children: [
          { id: 131, name: 'Flags' },
        ]
      },
        { id: 14, name: 'PCE' }
      ]
    },
  
  ];
  options = {};

  ngOnInit() {
  }

}
