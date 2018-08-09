import { Component, OnInit, OnDestroy} from '@angular/core';

@Component ({
  selector: 'app-emp-skill',
  templateUrl: './Skill.component.html',
  styleUrls: ['./Skill.component.css']
})

export class SkillComponent implements OnInit, OnDestroy  {
     skills: any[];

     ngOnInit() {
           this.skills = [];
           this.skills.push({skillname:'C++', level:9},{skillname:'java', level:7},{skillname:'Angular', level:8},{skillname:'HTML', level:6});
     }
     ngOnDestroy(){
        this.skills = null;
        console.log('skills destroy');
     }
}
