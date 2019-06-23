---
layout: post
title: "Big 0, Big Omega, and Big Theta"
date: 2019-06-23
---

I was watching a mathematical description of [Big O, Big Omega, and Big Theta](https://www.youtube.com/watch?v=ei-A_wy5Yxw&inden=2&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN) yesterday that described these concepts pretty well.  

[Big O] is a term used to describe the worst-case performance of an algorithm, or sequence of steps taken to accomplish some goal. [Big Omega] describes the best-case performance of an algorithm. [Big Theta] can be used to describe the bounds of performance of an algorithm when the best-case and worst-case are more or less the same.

For example, imagine you have code that evaluates each item of input and compares it against each of the n items of input.  Now, we perform this action four times to improve accuracy.  This code can be represented so far by the formula 4n^2.  Now, we'll say there is a code section that follows that takes 16 cycles for each of the n inputs.  The code is now represented as 4n^2 + 16n.  Finally, there is a little section at the end that prints a report that runs in 2 cycles regardless of the size of input.  The formaula representing this code is now [4n^2 + 16x + 2].

To get the worst-case run time, Big O, we will do an analysis as follows:
A function, f(n), is the worst-case run time of g(n), or, represented another way f(n) = O(g(n)), if there is a constant C and a value nsub0 such that f(n) <= C * g(n) for all n > nsub0.

For our example above, what is the worst-case run time or Big O of 4n^2 + 16n + 2?  Is O(4n^2 + 16n + 2) = O(n^4) ?  


First, imagine we pick a constant, C = 1.

| 4n^2 + 16n + 2 | => | O(n^4) |
|:--------|:-------:|--------:|
| n=0   | 2 < 0   | false   |
| n=1   | 22 < 1  | false   |
| n=2   | 50 < 16 | false   |
| n=3   | 86 < 81 | false   |
| n=4   | 130 < 256 | true   |
{: rules="groups"}

So, 4n^2 + 16n + 2 => O(n^4) when C = 1 and n >= 4.  This means the worst-case performance for this algorithm is n^4. Pretty bad!

Big Omega & Big Theta will follow...

