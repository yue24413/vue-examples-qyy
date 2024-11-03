## Decorators

### 一.装饰器与继承的区别

### 二.装饰器语法糖

### 三.装饰器工厂

### 四.类装饰器

#### 基本结构

```
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    // 新的类逻辑
  };
}
```

```
const nameDecorator:classDecorator = (target:object) =>{
    target.prototype...
}
```

### 五.方法装饰器

#### 1.基本结构

```
function methodDecorator(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
  // 装饰器逻辑
}
```

#### 2.Method Decorator 的三个参数

##### 2.1target

target: any: <br>
含义：表示目标对象，即拥有被装饰方法的对象。<br>
类型：通常是一个类的<strong>原型对象（prototype）</strong>。<br>
用途：用于访问类的原型对象，以便在需要时修改类的结构或行为。

##### 2.2name

name: string:<br>
含义：表示被装饰<strong>方法的名称</strong>。<br>
类型：字符串。<br>
用途：用于标识具体是哪个方法被装饰，可以在装饰器逻辑中使用这个名称来进行特定的操作。

##### 2.3descriptor

descriptor: PropertyDescriptor:<br>
含义：表示被装饰方法的属性描述符对象。<br>
类型：PropertyDescriptor，是一个包含方法元数据的对象。<br>
属性：<br>
configurable: 表示该属性是否可以被删除或修改。<br>
enumerable: 表示该属性是否可以在 for...in 循环中枚举。<br>
<strong>value: 方法的函数体。</strong><br>
writable: 表示该属性的值是否可以被改变。<br>
get: 获取属性值的函数（如果有）。<br>
set: 设置属性值的函数（如果有）。<br>
用途：用于修改或增强方法的行为。你可以修改 descriptor 对象中的任何一个属性来改变方法的行为。

#### 3.静态方法装饰器

无论方法是否为静态方法，方法装饰器中的 descriptor 都可以用来改变方法的逻辑。方法装饰器通过修改 descriptor 对象中的 value 属性来改变方法的行为。无论是静态方法还是实例方法，装饰器的工作原理是一致的。

### 属性装饰器

#### 1.基本结构

```
function propertyDecorator(target: any, name: string): void {
  // 装饰器逻辑
}
```

#### 2.两个参数

##### 2.1 target

##### 2.2 name:表示被装饰属性的名称。

#### 3. get set 闭包

### 参数装饰器

#### 1.基本结构

```
function parameterDecorator(target: any, name: string | symbol, position: number): void {
  // 装饰器逻辑
}
```

#### 2.三个参数

##### 2.1 target

##### 2.2 name:表示被装饰方法的名称。

##### 2.3 position

position: number:<br>
含义：表示被装饰参数的位置索引。<br>
类型：数字。<br>
用途：用于标识具体是哪个参数被装饰，可以在装饰器逻辑中使用这个索引来访问和修改参数。
