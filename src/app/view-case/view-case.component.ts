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
  styleUrls: ['./view-case.component.css'],
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

  ngOnInit() {
  }

}
