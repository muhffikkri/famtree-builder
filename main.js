class FamilyMember {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

class FamilyTree {
  constructor() {
    this.members = new Map();
  }

  addMember(name) {
    if (!this.members.has(name)) {
      this.members.set(name, new FamilyMember(name));
    }
  }

  addChild(parentName, childName) {
    this.addMember(parentName);
    this.addMember(childName);
    const parent = this.members.get(parentName);
    const child = this.members.get(childName);
    parent.addChild(child);
  }

  getMember(name) {
    return this.members.get(name);
  }

  getChildren(name) {
    const member = this.getMember(name);
    return member ? member.children : [];
  }
}

module.exports = { FamilyMember, FamilyTree };
class FamilyTreeGenerator {
  constructor() {
    this.familyTree = new FamilyTree();
  }

  generateFromData(data) {
    data.forEach(({ parent, child }) => {
      this.familyTree.addChild(parent, child);
    });
  }

  getFamilyTree() {
    return this.familyTree;
  }
}

module.exports = { FamilyMember, FamilyTree, FamilyTreeGenerator };
