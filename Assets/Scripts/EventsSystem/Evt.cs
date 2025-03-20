using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Evt
{
    private event Action _action = delegate { };

    public void Invoke()
    {
        _action.Invoke();
    }

    public void AddListener(Action listener)
    {
        _action -= listener; // Does nothing if listener not yest subscribed
        _action += listener;
        // Warning: Not thread-safe
    }

    public void RemoveListener(Action listener)
    {
        _action -= listener;
    }


}

public class Evt<T>
{
    private event Action<T> _action = delegate { };

    public void Invoke(T param)
    {
        _action.Invoke(param);
    }

    public void AddListener(Action<T> listener)
    {
        _action -= listener; // Does nothing if listener not yest subscribed
        _action += listener;
        // Warning: Not thread-safe
    }

    public void RemoveListener(Action<T> listener)
    {
        _action -= listener;
    }
}

public class Evt<T1, T2>
{
    private event Action<T1, T2> _action = delegate { };

    public void Invoke(T1 param1, T2 param2)
    {
        _action.Invoke(param1, param2);
    }

    public void AddListener(Action<T1, T2> listener)
    {
        _action -= listener; // Does nothing if listener not yest subscribed
        _action += listener;
        // Warning: Not thread-safe
    }

    public void RemoveListener(Action<T1, T2> listener)
    {
        _action -= listener;
    }
}